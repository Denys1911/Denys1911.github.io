function getTextFromUser(text) {
    let userText;

    do {
        userText = prompt(text);
    } while (!userText);

    return userText;
}

function getNumberWithLimitation(text, limit) {
    let number;

    do {
        number = parseInt(prompt(text));
    } while (isNaN(number) || number < 1 || number > limit);

    return number;
}

function createNewApartment(counter) {
    const apartmentNumber = counter;
    const amountOfRooms = getNumberWithLimitation(`Type an amount of rooms in apartment #${counter}`, 3);
    return new Apartment(apartmentNumber, amountOfRooms);
}

function createArrayWithPeople(counter, peopleAmount) {
    const arrayWithPeople = [];

    for (let j = 0; j < peopleAmount; j++) {
        const personName = getTextFromUser(`Type a name of person #${j + 1} in apartment #${counter}`);
        arrayWithPeople.push(new Person(personName))
    }

    return arrayWithPeople;
}

function createApartmentsArray(amountOfApartments) {
    const apartments = [];

    for (let i = 0; i < amountOfApartments; i++) {
        const apartment = createNewApartment(i + 1);
        const peopleAmount = getNumberWithLimitation(`Type an amount of people in apartment #${i + 1}`, Infinity);
        const peopleArr = createArrayWithPeople(i + 1, peopleAmount);

        apartment.setPeople(peopleArr);
        apartments.push(apartment);
    }

    return apartments;
}