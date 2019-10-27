const personName = getTextFromUser('Type a person name');
const personAge = getPersonsAge();
const person = new Person(personName, personAge);

person.showInformationAboutPerson();

const carBrand = getTextFromUser('Type a car brand');
const yearOfCarConstruction = getYearOfCarConstruction();
const carColor = getTextFromUser('Type a color of the car');
const car = new Car(carBrand, yearOfCarConstruction, carColor);

car.showInformationAboutCar();
car.setCarOwner(person);

