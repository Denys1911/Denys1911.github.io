function Person(id, name, age, location, email) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.email = email;
    this.age = age;
    this.balance = 100000;
}

Person.prototype = new Owner();

Person.prototype.createForm = function(wrapper) {
    const {id, name, age, location, email} = this;
    const errorDiv = '<div class="error-message hide">Invalid value</div>';

    wrapper.html(`
        <form class="form-group person-form" data-id=${id || ''}>
            <input type="text" class="form-control" value="${name || ''}" name="name" 
                placeholder="Name: starts with capital letter">
            ${errorDiv}
            <input type="number" class="form-control" value="${age || ''}" name="age" 
                placeholder="Age: 0-199" min="0">
            ${errorDiv}
            <input type="text" class="form-control" value="${location || ''}" name="location" 
                placeholder="Location: starts with capital letter">
            ${errorDiv}
            <input type="email" class="form-control" value="${email || ''}" name="email" 
                placeholder="Email: ivanov@gmail.com">
            ${errorDiv}
            <input type="button" class="btn btn-success confirm-form-btn" value="Save">
        </form>
        ${id ? this.createFormForBuyingOrSellingCars('person') : ''}
    `);
};

Person.prototype.createAdditionalInfo = function(wrapper) {
    const {age, location, email, cars, balance} = this;

    wrapper.html(`
        <ul class="person-additional-info">
            <li><span class="important">Age: </span>${age}</li>
            <li><span class="important">Place of residence: </span>${location}</li>
            <li><span class="important">Email: </span>${email}</li>
            <li><span class="important">Balance: </span>${balance}$</li>
            <li><span class="important">Cars: </span>
                ${(cars && cars.length) ? this.showOwnCarsOnPage() : 'No cars available'}
            </li>
        </ul>
    `);
};

Person.prototype.regExpObject = {
    name: /^[A-Z][a-z]+$/,
    age: /^(?:\d|[1-9]\d|1\d\d)$/,
    location: /^(?:[A-Z][a-z]+ )*[A-Z][a-z]+$/,
    email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
};