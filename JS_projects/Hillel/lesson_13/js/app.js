'use strict';

const peopleList = document.querySelector('.people-list');
const newPersonFormWrapper = document.querySelector('.new-person-form-wrapper');
const showFormBtn = document.querySelector('.show-form-btn');

rewritePeopleArrIfLocalStorageIsPresent('people-list');
createPeopleList(peopleList, peopleDataArr);
createForm(newPersonFormWrapper, {});

const addNewPersonBtn = document.querySelector('.new-person-form-wrapper .confirm-form-btn');

peopleList.addEventListener('click', handleClickOnPeopleList);
showFormBtn.addEventListener('click', handleClickOnShowFormBtn);
addNewPersonBtn.addEventListener('click', handleClickOnAddNewPersonBtn);