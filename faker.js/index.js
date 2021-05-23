const faker = require('faker');

faker.locale = 'es';

const randomName = faker.name.findName();
const randomEmail = faker.internet.email();
const randomCard = faker.helpers.createCard();

console.log({ randomName, randomEmail, randomCard });