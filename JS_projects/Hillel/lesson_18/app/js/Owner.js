'use strict';

function Owner() {
    this.setCar = function(car) {
        if (this.cars) {
            this.cars.push(car);
            return;
        }

        this.cars = [car];
    };

    this.deleteCar = function(carIndex) {
        this.cars.splice(carIndex, 1);
    };

    this.changeBalance = function(value) {
        this.balance += value;
    };

    this.showOwnCarsOnPage = function() {
        let str = '';

        this.cars.forEach(car => {
            const {name, model, yearOfConstruction, cost} = car;
            str += `<li>${name} ${model}, ${yearOfConstruction}, ${cost}$</li>`;
        });

        return `<ol>${str}</ol>`;
    };

    this.createFormForBuyingOrSellingCars = function(formName) {
        function createCarsOptions(carsDataArr) {
            return carsDataArr.map(carItem => {
                const {id, name, model, yearOfConstruction, cost} = carItem;

                return `<option value="${id}">${name} ${model}, ${yearOfConstruction}, ${cost}$</option>`;
            });
        }

        const carsArr = this.cars;
        const availableCars = createCarsOptions(carsDataArr);
        const ownCars = (carsArr && carsArr.length) ? createCarsOptions(carsArr) : '';
        const errorDiv = `<div class="error-message hide">Please, select car/car's first</div>`;

        return `
            <form class="form-group ${formName}-form" data-id=${this.id}>
                <select class="form-control available-cars" multiple="multiple">
                    <option value="" selected>Select car/car's</option>
                    ${availableCars}
                </select>
                ${errorDiv}
                <input type="button" class="btn btn-success buy-car-btn" value="Buy">
                ${ownCars ? `<select class="form-control own-cars" multiple="multiple">
                                 <option value="" selected>Select car/car's</option>
                                 ${ownCars}
                             </select>
                             ${errorDiv}
                             <input type="button" class="btn btn-danger sell-car-btn" value="Sell">`
                : ''}
            </form>
        `;
    };
}
