function Person(name, age) {
    this.name = name;
    this.age = age;
    this.showInformationAboutPerson = function () {
        console.log('Name of the person: ' + this.name + '\nAge of the person: '+ this.age);
    };
}