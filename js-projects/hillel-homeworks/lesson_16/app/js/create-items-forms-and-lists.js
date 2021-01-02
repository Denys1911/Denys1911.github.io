function createItemsFormsAndLists() {
    const newPersonFormWrapper = document.querySelector('.new-person-form-wrapper');
    const newCompanyFormWrapper = document.querySelector('.new-company-form-wrapper');
    const newCarFormWrapper = document.querySelector('.new-car-form-wrapper');
    const [peopleList, companiesList, carsList] = getAllItemsLists();

    createItemsList(peopleList, 'person', peopleDataArr);
    createItemsList(companiesList, 'company', companiesDataArr);
    createItemsList(carsList, 'car', carsDataArr);

    (new Person()).createForm(newPersonFormWrapper);
    (new Company()).createForm(newCompanyFormWrapper);
    (new Car()).createForm(newCarFormWrapper);
}
