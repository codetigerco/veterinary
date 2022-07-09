import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
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
    },
    datetime: {
        yesterday: () => {
            let today = dayjs().toISOString();
            let yesterday = dayjs().subtract(1, 'day').toISOString();
            let date = dayjs(faker.date.between(yesterday, today));

            return `Yesterday at ${date.format('h:mm a')}`
        },
        today: () => {
            let today = dayjs().toISOString();
            let tomorrow = dayjs().add(1, 'day').toISOString();
            let date = dayjs(faker.date.between(today, tomorrow));

            return `Today at ${date.format('h:mm a')}`
        },
        future: () => {
            let future = faker.date.future();
            let date = dayjs(future);
            
            return date.format('ddd M/D/YYYY h:mm a');
        }
    }

}
