import { IFakerOption, IPluginMessage } from "./faker"

figma.showUI(__html__, { height: 340, width: 240 })

const textNodes: TextNode[] = []

function traverseNodes(parentNode: SceneNode) {
  if (parentNode.type === "TEXT") {
    textNodes.push(parentNode)
  } else if ("children" in parentNode) {
    for (const child of parentNode.children) {
      if (
        child.type === "GROUP" ||
        child.type === "FRAME" ||
        child.type === "INSTANCE" ||
        child.type === "COMPONENT" ||
        child.type === "TEXT"
      ) {
        traverseNodes(child)
      }
    }
  }
}

function clearTextNodes() {
  textNodes.length = 0
}

function traverseSelection() {
  const selection = figma.currentPage.selection
  for (const selectedNode of selection) {
    traverseNodes(selectedNode)
  }
}

function replaceText(pluginMessage: IPluginMessage) {
 
  if (textNodes.length) {
    textNodes.forEach((textNode, i) => {
      figma.loadFontAsync(textNode.fontName as FontName).then(() => {
        textNode.characters = pluginMessage.data[i]
      })
    })

  } else {
    figma.closePlugin("Select at least one text node before using Faker.")
  }
}

const lsKey = "figma-faker"

async function setLsRecents(fakerOptions: Array<IFakerOption>) {
  await figma.clientStorage.setAsync(lsKey, fakerOptions)
}

async function getLsRecents() {
  figma.clientStorage.getAsync(lsKey).then((lsRecentOptions) => {
    if (lsRecentOptions) {
      const pluginMessage: IPluginMessage = {
        type: "ls-recents-ready",
        data: lsRecentOptions,
      }
      figma.ui.postMessage(pluginMessage)
    }
  })
}

function uiCreateFakeData(fakerOption: IFakerOption) {
  const newPluginMessage: IPluginMessage = {
    type: "create-faker-text",
    data: {
      countNodes: textNodes.length,
      fakerOption: fakerOption,
    }
  }
  figma.ui.postMessage(newPluginMessage)
} 


figma.ui.onmessage = (pluginMessage: IPluginMessage) => {
  switch (pluginMessage.type) {
    case "run-faker":
      clearTextNodes()
      traverseSelection()
      uiCreateFakeData(pluginMessage.data as IFakerOption)
      break;

    case "set-ls-recents":
      setLsRecents(pluginMessage.data as Array<IFakerOption>)
      break;
    
    case "get-ls-recents":
      getLsRecents()
      break;

    case "replace-text":
      replaceText(pluginMessage)
      break;
  }
}
