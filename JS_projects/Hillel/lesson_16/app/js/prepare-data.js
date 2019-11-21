function prepareData() {
    createLocalStorageOrRewritePeopleArr(PEOPLE_STORAGE_NAME, peopleDataArr);
    createLocalStorageOrRewritePeopleArr(COMPANIES_STORAGE_NAME, companiesDataArr);
    createLocalStorageOrRewritePeopleArr(CARS_STORAGE_NAME, carsDataArr);

    function createLocalStorageOrRewritePeopleArr(storageName, itemDataArr) {
        if (localStorage.getItem(storageName)) {
            const storageArr = JSON.parse(localStorage.getItem(storageName));

            switch (storageName) {
                case PEOPLE_STORAGE_NAME:
                    peopleDataArr = storageArr.map(item => Object.assign(new Person(), item));
                    break;
                case COMPANIES_STORAGE_NAME:
                    companiesDataArr = storageArr.map(item => Object.assign(new Company(), item));
                    break;
                case CARS_STORAGE_NAME:
                    carsDataArr = storageArr.map(item => Object.assign(new Car(), item));
            }
        } else {
            localStorage.setItem(storageName, JSON.stringify(itemDataArr));
        }
    }
}