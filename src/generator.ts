import { faker } from '@faker-js/faker';
import entries from './entries';

export default {
    address: faker.address,
    name: faker.name,
    animal: {
        pig: () => faker.helpers.arrayElement(entries.Pigs),
        ferret: () => faker.helpers.arrayElement(entries.Ferrets),
        rodent: () => faker.helpers.arrayElement(entries.Rodents),
        ...faker.animal
    },
    medicine: {
        antibiotic: () => faker.helpers.arrayElement(entries.Antibiotics),
        analgesic: () => faker.helpers.arrayElement(entries.Analgesics),
        medicine: () => faker.helpers.arrayElement(entries.Medicines)
    }

}
