function Car(brand, yearOfConstruction, color) {
    this.brand = brand;
    this.yearOfConstruction = yearOfConstruction;
    this.color = color;
    this.showInformationAboutCar = function () {
        console.log('Car brand: ' + this.brand +
            '\nYear of car construction: ' + this.yearOfConstruction +
            '\nColor of the car: ' + this.color);
    };
    this.setCarOwner = function (owner) {
        this.owner = owner;
    };
}