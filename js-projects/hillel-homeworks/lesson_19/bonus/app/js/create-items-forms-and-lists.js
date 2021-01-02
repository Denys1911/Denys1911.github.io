function createItemsFormsAndLists() {
    const newPersonFormWrapper = $('.new-person-form-wrapper');
    const newCompanyFormWrapper = $('.new-company-form-wrapper');
    const newCarFormWrapper = $('.new-car-form-wrapper');
    const [peopleList, companiesList, carsList] = getAllItemsLists();

    createItemsList(peopleList, 'person', peopleDataArr);
    createItemsList(companiesList, 'company', companiesDataArr);
    createItemsList(carsList, 'car', carsDataArr);

    (new Person()).createForm(newPersonFormWrapper);
    (new Company()).createForm(newCompanyFormWrapper);
    (new Car()).createForm(newCarFormWrapper);
}
