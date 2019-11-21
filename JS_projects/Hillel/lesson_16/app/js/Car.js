function Car(id, name, yearOfConstruction, model, cost) {
    this.id = id;
    this.name = name;
    this.model = model;
    this.yearOfConstruction = yearOfConstruction;
    this.cost = cost;
}

Car.prototype.createForm = function(wrapper) {
    const {id, name, model, yearOfConstruction, cost} = this;
    const errorDiv = '<div class="error-message hide">Invalid value</div>';

    wrapper.innerHTML = `
        <form class="form-group car-form" ${id ? `data-id=${id}` : ''}>
            <input type="text" class="form-control" ${name ? `value="${name}"` : ''} name="name" 
                placeholder="Name: starts with capital letter">
            ${errorDiv}
            <input type="number" class="form-control" ${yearOfConstruction ? `value="${yearOfConstruction}"` : ''} 
                name="yearOfConstruction" placeholder="Year of construction (1885 min)" min="1885" max="2020">
            ${errorDiv}
            <input type="text" class="form-control" ${model ? `value="${model}"` : ''} name="model" 
                placeholder="Model: starts with capital letter">
            ${errorDiv}
            <input type="number" class="form-control" ${cost ? `value="${cost}"` : ''} name="cost" min="1"
                placeholder="Car's cost (greater than 0)">
            ${errorDiv}
            <input type="button" class="btn btn-success confirm-form-btn" value="Save">
        </form>
    `;
};

Car.prototype.createAdditionalInfo = function(wrapper) {
    const {model, yearOfConstruction, cost} = this;

    wrapper.innerHTML = `
        <ul class="car-additional-info">
            <li><span class="important">Car model: </span>${model}</li>
            <li><span class="important">Year of construction: </span>${yearOfConstruction}</li>
            <li><span class="important">Car's cost: </span>${cost}$</li>
        </ul>
    `;
};

Car.prototype.regExpArr = {
    name: /^[A-Z][a-z]+$/,
    yearOfConstruction: /^(18(8[5-9]|9[0-9])|19[0-9]{2}|20[01][0-9])$/,
    model: /^[A-Z][\w ]+$/,
    cost: /^[1-9]\d*$/
};
