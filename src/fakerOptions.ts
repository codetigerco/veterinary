import { IFakerOptions } from "./faker"

const fakerOptions: IFakerOptions = [
  {
    name: "Name",
    children: [
      {
        name: "Pet Name",
        methodName: "name.firstName"
      },
    ]
  },
  {
    name: "Medicine",
    children: [
      {
        name: "Medicine",
        methodName: "medicine.medicine"
      },
      {
        name: "Analgesic",
        methodName: "medicine.analgesic"
      },
      {
        name: "Anti-biotic",
        methodName: "medicine.antibiotic"
      },
      
    ]
  },
  {
    name: "Animal Breeds",
    children: [
      {
        name: "Bird",
        methodName: "animal.bird",
      },
      {
        name: "Feline",
        methodName: "animal.cat",
      },
      {
        name: "Cetacean",
        methodName: "animal.cetacean",
      },
      {
        name: "Bovidae",
        methodName: "animal.cow",
      },
      {
        name: "Canine",
        methodName: "animal.dog",
      },
      {
        name: "Fish",
        methodName: "animal.fish",
      },
      {
        name: "Equine",
        methodName: "animal.horse",
      },
      {
        name: "Reptile",
        methodName: "animal.snake",
      },
      {
        name: "Rabbit",
        methodName: "animal.rabbit",
      },
      {
        name: "Suidae",
        methodName: "animal.pig",
      },
      {
        name: "Mustelids",
        methodName: "animal.ferret",
      },
      {
        name: "Rodent",
        methodName: "animal.rodent",
      },
    ],
  },
  {
    name: "Address",
    children: [
      {
        name: "Zip code",
        methodName: "address.zipCode",
      },
      {
        name: "City",
        methodName: "address.city",
      },
      {
        name: "City prefix",
        methodName: "address.cityPrefix",
      },
      {
        name: "City suffix",
        methodName: "address.citySuffix",
      },
      {
        name: "Street name",
        methodName: "address.streetName",
      },
      {
        name: "Street address",
        methodName: "address.streetAddress",
      },
      {
        name: "Street suffix",
        methodName: "address.streetSuffix",
      },
      {
        name: "Street prefix",
        methodName: "address.streetPrefix",
      },
      {
        name: "Secondary address",
        methodName: "address.secondaryAddress",
      },
      {
        name: "County",
        methodName: "address.county",
      },
      {
        name: "Country",
        methodName: "address.country",
      },
      {
        name: "Country code",
        methodName: "address.countryCode",
      },
      {
        name: "State",
        methodName: "address.state",
      },
      {
        name: "State abbreviation",
        methodName: "address.stateAbbr",
      },
      {
        name: "Latitude",
        methodName: "address.latitude",
      },
      {
        name: "Longitude",
        methodName: "address.longitude",
      },
    ],
  },
]

export default fakerOptions
