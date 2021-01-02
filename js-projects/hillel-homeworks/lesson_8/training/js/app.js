const houseAddress = getTextFromUser('Type a house address');
const myHouse = new House(houseAddress);
const amountOfApartments = getNumberWithLimitation('Type an amount of apartments in the house', 5);
const apartments = createApartmentsArray(amountOfApartments);

myHouse.setApartments(apartments);
console.log(myHouse);