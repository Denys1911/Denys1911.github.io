'use strict';

function rewritePeopleArrIfLocalStorageIsPresent(storageName) {
    if (localStorage.getItem(storageName)) {
        peopleDataArr = JSON.parse(localStorage.getItem(storageName));
    }
}

function createPeopleList(peopleList, peopleDataArr) {
    peopleDataArr.forEach(person => {
        peopleList.innerHTML += `
            <div class="person">
                <div class="person-view-panel" data-id="${person.id}">
                    <span class="col-3">Name: ${person.name}</span>
                    <button class="btn btn-outline-dark edit-btn">Edit</button>
                    <button class="btn btn-outline-info view-btn">View</button>
                    <button class="btn btn-outline-danger remove-btn">Remove</button>
                </div>
                <div class="person-info text-center" data-id="${person.id}"></div>
            </div>
        `;
    });
}

function createForm(wrapper, {id, name, age, city}) {
     wrapper.innerHTML = `
        <form class="form-group person-form" ${id ? `data-id=${id}` : ''}>
            <input type="text" class="form-control" ${name ? `value=${name}` : ''} name="name" placeholder="Name">
            <input type="number" class="form-control" ${age ? `value=${age}` : ''} name="age" placeholder="Age" min="0">
            <input type="text" class="form-control" ${city ? `value=${city}` : ''} name="city" placeholder="City">
            <input type="button" class="btn btn-success confirm-form-btn" value="Save">
        </form>
    `;
}

function createConfirmDeletionBlock(wrapper, personId) {
    wrapper.innerHTML = `
        <div class="confirm-deletion-block">
            <span>Are you sure?</span>
            <div data-id="${personId}">
                <button class="btn btn-success confirm-deletion-btn">Confirm</button>
                <button class="btn btn-danger cancel-deletion-btn">Cancel</button>  
            </div>
        </div>
    `;
}

function createPersonAdditionalInfo(wrapper, personData) {
    wrapper.innerHTML = `
        <div class="person-additional-info">
            <span>Age: ${personData.age}</span>
            <span>Place of residence: ${personData.city}</span>
        </div>
    `;
}

function createErrorMessage(previousSibling) {
    const errorMessageHTML = `<div class="error-message">Please, fill all fields correctly</div>`;

    previousSibling.insertAdjacentHTML('afterend', errorMessageHTML);
}

function changeElementClassAccordingToCondition(element, className, condition) {
    if (element.querySelector(condition)) {
        element.classList.toggle(className);
    } else {
        element.classList.remove(className);
    }
}

function getPersonIdAndInfoWrapper(targetedElement) {
    const targetedElementWrapper = targetedElement.parentNode;
    const personId = parseInt(targetedElementWrapper.dataset.id);
    const personInfoWrapper = targetedElementWrapper.nextElementSibling;
    return {personId, personInfoWrapper};
}

function getPersonData(peopleDataArr, personId) {
    return peopleDataArr.find(person => person.id === personId);
}

function getPersonIndex(peopleDataArr, personId) {
    return peopleDataArr.findIndex(person => person.id === personId);
}

function getNewPersonId(peopleDataArr) {
    return peopleDataArr[peopleDataArr.length - 1].id + 1;
}

function validateForm(form) {
    for (let i = 0; i < form.elements.length; i++) {
        const formElement = form.elements[i];

        if (formElement.type === 'number' && (formElement.value < 0 || formElement.value > 200)) {
            return false;
        }

        if (!formElement.value) {
            return false;
        }
    }

    return true;
}

function getFormValues(form) {
    let formData = {};

    for (let i = 0; i < form.elements.length; i++) {
        const formElement = form.elements[i];

        if (formElement.type === 'button') {
            continue;
        }

        if (formElement.type === 'number') {
            formData[formElement.name] = parseInt(formElement.value);
            continue;
        }

        formData[formElement.name] = formElement.value;
    }

    return formData;
}

function clearAllFormFields(form) {
    for (let i = 0; i < form.elements.length; i++) {
        const formElement = form.elements[i];

        if (formElement.type === 'button') {
            continue;
        }

        formElement.value = '';
    }
}

function updatePeopleListAndLocalStorage(peopleDataArr, peopleList, storageName) {
    peopleList.innerHTML = '';
    localStorage.setItem(storageName, JSON.stringify(peopleDataArr));
    createPeopleList(peopleList, peopleDataArr);
}

function handleClickOnPeopleList(e) {
    const targetedElement = e.target;

    if (targetedElement.classList.contains('edit-btn')) {
        handleClickOnEditBtn(targetedElement);
    }

    if (targetedElement.classList.contains('view-btn')) {
        handleClickOnViewBtn(targetedElement);
    }

    if (targetedElement.classList.contains('remove-btn')) {
        handleClickOnRemoveBtn(targetedElement);
    }

    if (targetedElement.classList.contains('confirm-form-btn')) {
        handleClickOnConfirmFormBtn(targetedElement);
    }

    if (targetedElement.classList.contains('confirm-deletion-btn')) {
        handleClickOnConfirmDeletionBtn(targetedElement);
    }

    if (targetedElement.classList.contains('cancel-deletion-btn')) {
        handleClickOnCancelDeletionBtn(targetedElement);
    }
}

function handleClickOnEditBtn(targetedElement) {
    const {personId, personInfoWrapper} = getPersonIdAndInfoWrapper(targetedElement);
    const personData = getPersonData(peopleDataArr, personId);

    changeElementClassAccordingToCondition(personInfoWrapper, 'hide', '.form-group');
    createForm(personInfoWrapper, personData);
}

function handleClickOnViewBtn(targetedElement) {
    const {personId, personInfoWrapper} = getPersonIdAndInfoWrapper(targetedElement);
    const personData = getPersonData(peopleDataArr, personId);

    changeElementClassAccordingToCondition(personInfoWrapper, 'hide', '.person-additional-info');
    createPersonAdditionalInfo(personInfoWrapper, personData);
}

function handleClickOnRemoveBtn(targetedElement) {
    const {personId, personInfoWrapper} = getPersonIdAndInfoWrapper(targetedElement);

    changeElementClassAccordingToCondition(personInfoWrapper, 'hide', '.confirm-deletion-block');
    createConfirmDeletionBlock(personInfoWrapper, personId);
}

function handleClickOnConfirmFormBtn(targetedElement) {
    const form = targetedElement.parentNode;

    if (!validateForm(form)) {
        if (!form.nextElementSibling) {
            createErrorMessage(form);
        }

        return;
    }

    const formData = getFormValues(form);
    const personId = parseInt(form.dataset.id);
    const personIndex = getPersonIndex(peopleDataArr, personId);
    peopleDataArr[personIndex] = {id: personId, ...formData};
    updatePeopleListAndLocalStorage(peopleDataArr, peopleList, 'people-list');
}

function handleClickOnConfirmDeletionBtn(targetedElement) {
    const {personId} = getPersonIdAndInfoWrapper(targetedElement);
    const personIndex = getPersonIndex(peopleDataArr, personId);
    peopleDataArr.splice(personIndex, 1);
    updatePeopleListAndLocalStorage(peopleDataArr, peopleList, 'people-list');
}

function handleClickOnCancelDeletionBtn(targetedElement) {
    const targetedElementWrapper = targetedElement.parentNode;
    const targetedElementWrapperId = targetedElementWrapper.dataset.id;
    const personInfoWrapper = document.querySelector(`.person-info[data-id="${targetedElementWrapperId}"]`);
    personInfoWrapper.innerHTML = '';
}

function handleClickOnShowFormBtn() {
    newPersonFormWrapper.classList.toggle('hide');
}

function handleClickOnAddNewPersonBtn() {
    const form = this.parentNode;
    const formSibling = form.nextElementSibling;

    if (!validateForm(form)) {
        if (!formSibling) {
            createErrorMessage(form);
        }

        return;
    }

    const formData = getFormValues(form);
    const newPersonId = getNewPersonId(peopleDataArr);
    peopleDataArr.push({id: newPersonId, ...formData});

    if (formSibling) {
        formSibling.remove();
    }

    clearAllFormFields(form);
    updatePeopleListAndLocalStorage(peopleDataArr, peopleList, 'people-list');
}