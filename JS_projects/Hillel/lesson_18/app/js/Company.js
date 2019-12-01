function Company(id, name, employeesAmount, location, officialSite) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.officialSite = officialSite;
    this.employeesAmount = employeesAmount;
    this.balance = 1000000;
}

Company.prototype = new Owner();

Company.prototype.createForm = function(wrapper) {
    const {id, name, location, officialSite, employeesAmount} = this;
    const errorDiv = '<div class="error-message hide">Invalid value</div>';

    wrapper.html(`
        <form class="form-group company-form" data-id=${id || ''}>
            <input type="text" class="form-control" value="${name || ''}" name="name" 
                placeholder="Name: starts with capital letter">
            ${errorDiv}
            <input type="number" class="form-control" value="${employeesAmount || ''}" 
                name="employeesAmount" placeholder="Employees amount (greater than 1)" min="2">
            ${errorDiv}
            <input type="text" class="form-control" value="${location || ''}" name="location" 
                placeholder="Location: starts with capital letter">
            ${errorDiv}
            <input type="text" class="form-control" value="${officialSite || ''}" name="officialSite" 
                placeholder="https://www.google.com">
            ${errorDiv}
            <input type="button" class="btn btn-success confirm-form-btn" value="Save">
        </form>
        ${id ? this.createFormForBuyingOrSellingCars('company') : ''}
    `);
};

Company.prototype.createAdditionalInfo = function(wrapper) {
    const {location, officialSite, employeesAmount, balance, cars} = this;

    wrapper.html(`
        <ul class="company-additional-info">
            <li><span class="important">Amount of employees: </span>${employeesAmount}</li>
            <li><span class="important">Company location: </span>${location}</li>
            <li><span class="important">Official site: </span>${officialSite}</li>
            <li><span class="important">Balance: </span>${balance}$</li>
            <li><span class="important">Cars: </span>
                ${(cars && cars.length) ? this.showOwnCarsOnPage() : 'No cars available'}
            </li>
        </ul>
    `);
};

Company.prototype.regExpObject = {
    name: /^(?:[A-Z][a-z]+ )*[A-Z][a-z]+$/,
    employeesAmount: /^(?:[2-9]|[1-9]\d+)$/,
    location: /^(?:[A-Z][a-z]+ )*[A-Z][a-z]+$/,
    officialSite: /^http(s)?:\/\/\w+\./,
};