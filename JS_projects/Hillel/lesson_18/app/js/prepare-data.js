function prepareData() {
    createLocalStorageOrRewritePeopleArr(PEOPLE_STORAGE_NAME, peopleDataArr);
    createLocalStorageOrRewritePeopleArr(COMPANIES_STORAGE_NAME, companiesDataArr);
    createLocalStorageOrRewritePeopleArr(CARS_STORAGE_NAME, carsDataArr);

    function createLocalStorageOrRewritePeopleArr(storageName, itemDataArr) {
        if (localStorage.getItem(storageName)) {
            const storageArr = JSON.parse(localStorage.getItem(storageName));

            switch (storageName) {
                case PEOPLE_STORAGE_NAME:
                    peopleDataArr = storageArr.map(person => {
                        person = Object.assign(new Person(), person);
                        setPrototypeForOwnerAvailableCars(person);
                        return person;
                    });

                    break;
                case COMPANIES_STORAGE_NAME:
                    companiesDataArr = storageArr.map(company => {
                        company = Object.assign(new Company(), company);
                        setPrototypeForOwnerAvailableCars(company);
                        return company;
                    });

                    break;
                case CARS_STORAGE_NAME:
                    carsDataArr = storageArr.map(car => Object.assign(new Car(), car));

                    break;
            }
        } else {
            localStorage.setItem(storageName, JSON.stringify(itemDataArr));
        }
        
        function setPrototypeForOwnerAvailableCars(owner) {
            if (owner.cars && owner.cars.length) {
                owner.cars = owner.cars.map(car => Object.assign(new Car(), car));
            }
        }
    }
}