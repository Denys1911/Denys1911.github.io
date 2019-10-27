function getTextFromUser(text) {
    let name;

    do {
        name = prompt(text);
    } while (!name);

    return name;
}

function getPersonsAge() {
    let age;

    do {
        age = parseInt(prompt('Type an age of the person'))
    } while (isNaN(age) || age < 18);

    return age;
}

function getYearOfCarConstruction() {
    let yearOfCarConstruction;
    const currentTime = new Date();
    const currentYear = currentTime.getFullYear();

    do {
        yearOfCarConstruction = parseInt(prompt('Type an year of car construction'))
    } while (isNaN(yearOfCarConstruction) || yearOfCarConstruction < 1885 || yearOfCarConstruction > currentYear);

    return yearOfCarConstruction;
}