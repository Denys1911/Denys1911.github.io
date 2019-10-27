function Apartment(number, rooms) {
    this.number = number;
    this.rooms = rooms;
}

Apartment.prototype.setPeople = function (people) {
    this.people = people;
};