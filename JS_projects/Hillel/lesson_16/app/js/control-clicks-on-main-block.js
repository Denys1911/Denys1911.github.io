function controlClicksOnMainBlock() {
    const mainBlock = document.querySelector('.main');
    const [peopleList, companiesList, carsList] = getAllItemsLists();

    mainBlock.addEventListener('click', handleClickOnMainBlock);

    function handleClickOnMainBlock(e) {
        const targetedElement = e.target;
        const [itemDataArr, className,
            itemList, storageName] = getAdditionalInformationAccordingToTargetedElement();
        const {itemId, itemInfoWrapper} = getItemIdAndInfoWrapper();
        const itemData = getItemData(itemDataArr, itemId);

        if (targetedElement.classList.contains('edit-btn')) {
            handleClickOnEditBtn();
        }

        if (targetedElement.classList.contains('view-btn')) {
            handleClickOnViewBtn();
        }

        if (targetedElement.classList.contains('remove-btn')) {
            handleClickOnRemoveBtn();
        }

        if (targetedElement.classList.contains('confirm-form-btn')) {
            handleClickOnConfirmFormBtn();
        }

        if (targetedElement.classList.contains('confirm-deletion-btn')) {
            handleClickOnConfirmDeletionBtn();
        }

        if (targetedElement.classList.contains('cancel-deletion-btn')) {
            handleClickOnCancelDeletionBtn();
        }

        if (targetedElement.classList.contains('show-form-btn')) {
            handleClickOnShowFormBtn();
        }

        if (targetedElement.classList.contains('buy-car-btn')) {
            handleClickOnBuyOrCellCarBtn('buy', '.available-cars');
        }

        if (targetedElement.classList.contains('sell-car-btn')) {
            handleClickOnBuyOrCellCarBtn('sell', '.own-cars');
        }

        function handleClickOnEditBtn() {
            changeElementClassAccordingToCondition(itemInfoWrapper, 'hide', '.form-group');
            itemData.createForm(itemInfoWrapper);
        }

        function handleClickOnViewBtn() {
            changeElementClassAccordingToCondition(itemInfoWrapper, 'hide', `.${className}-additional-info`);
            itemData.createAdditionalInfo(itemInfoWrapper);
        }

        function handleClickOnRemoveBtn() {
            changeElementClassAccordingToCondition(itemInfoWrapper, 'hide', '.confirm-deletion-block');
            createConfirmDeletionBlock(itemInfoWrapper, itemId);
        }

        function handleClickOnConfirmFormBtn() {
            const form = targetedElement.parentNode;

            if (targetedElement.closest('[class*="list"]')) {
                updateItem();
            } else {
                createNewItem();
            }

            function updateItem() {
                const itemIndex = getItemIndex(itemDataArr, itemId);

                if (!validateForm(form, itemDataArr[itemIndex].regExpArr)) {
                    return;
                }

                const formData = getFormValues(form);
                itemDataArr[itemIndex] = createItemAccordingToCondition(className, itemId, ...formData);
                updateItemListAndLocalStorage(itemDataArr, itemList, className, storageName);
                clearPersonAndCompanyInfoBlocksAccordingToCondition();
            }

            function createNewItem() {
                const newItemObj = createItemAccordingToCondition(className);

                if (!validateForm(form, newItemObj.regExpArr)) {
                    return;
                }

                const formData = getFormValues(form);
                const newItemId = getNewItemId(itemDataArr);
                const newItem = createItemAccordingToCondition(className, newItemId, ...formData);
                addItem(itemDataArr, newItem);
                hideAllErrorMessages(form);
                clearAllFormFields(form);
                updateItemListAndLocalStorage(itemDataArr, itemList, className, storageName);
                clearPersonAndCompanyInfoBlocksAccordingToCondition();
            }
        }

        function handleClickOnConfirmDeletionBtn() {
            const itemIndex = getItemIndex(itemDataArr, itemId);

            deleteItem(itemDataArr, itemIndex);
            updateItemListAndLocalStorage(itemDataArr, itemList, className, storageName);
            clearPersonAndCompanyInfoBlocksAccordingToCondition();
        }

        function handleClickOnCancelDeletionBtn() {
            const infoWrapper = targetedElement.closest('[class*="info"]');

            infoWrapper.innerHTML = '';
        }

        function handleClickOnShowFormBtn() {
            targetedElement.nextElementSibling.classList.toggle('hide');
        }

        function handleClickOnBuyOrCellCarBtn(identifier, selectClassName) {
            const form = targetedElement.parentNode;
            const select = form.querySelector(selectClassName);

            if (!select.value) {
                showErrorMessage(select.nextElementSibling);
                return;
            }

            if (identifier === 'buy') {
                performBuyingCar();
            } else {
                performSellingCar();
            }

            function performBuyingCar() {
                if (getTotalOrderValue() > itemData.balance) {
                    showErrorMessage(select.nextElementSibling, 'Not enough money for this order(');
                    return;
                }

                for (let i = 0; i < select.options.length; i++) {
                    const option = select.options[i];

                    if (option.selected) {
                        const [selectedCarIndex, selectedCarArr] =
                            getAdditionalInformationAccordingToSelectedOptionValue(option.value, carsDataArr);
                        itemData.changeBalance(-selectedCarArr.cost);
                        itemData.setCar(selectedCarArr);
                        deleteItem(carsDataArr, selectedCarIndex);
                    }
                }

                updateItemListAndLocalStorage(carsDataArr, carsList, 'car', CARS_STORAGE_NAME);
                updateItemListAndLocalStorage(itemDataArr, itemList, className, storageName);

                function getTotalOrderValue() {
                    let totalOrderValue = 0;

                    for (let i = 0; i < select.options.length; i++) {
                        const option = select.options[i];

                        if (option.selected) {
                            const [ , selectedCarArr] =
                                getAdditionalInformationAccordingToSelectedOptionValue(option.value, carsDataArr);
                            totalOrderValue += selectedCarArr.cost;
                        }
                    }

                    return totalOrderValue;
                }
            }

            function performSellingCar() {
                for (let i = 0; i < select.options.length; i++) {
                    const option = select.options[i];

                    if (option.selected) {
                        const [selectedCarIndex, selectedCarArr] =
                            getAdditionalInformationAccordingToSelectedOptionValue(option.value, itemData.cars);
                        selectedCarArr.id = getNewItemId(carsDataArr);
                        const sellingPrice = selectedCarArr.cost * CARS_RESIDUAL_VALUE_INDEX;
                        itemData.changeBalance(sellingPrice);
                        itemData.deleteCar(selectedCarIndex);
                        addItem(carsDataArr, selectedCarArr);
                    }
                }

                updateItemListAndLocalStorage(carsDataArr, carsList, 'car', CARS_STORAGE_NAME);
                updateItemListAndLocalStorage(itemDataArr, itemList, className, storageName);
            }

            function getAdditionalInformationAccordingToSelectedOptionValue(selectedOptionValue, carsArr) {
                selectedOptionValue = parseInt(selectedOptionValue);
                const selectedCarIndex = getItemIndex(carsArr, selectedOptionValue);
                const selectedCarArr = getItemData(carsArr, selectedOptionValue);

                return [selectedCarIndex, selectedCarArr];
            }
        }

        function getAdditionalInformationAccordingToTargetedElement() {
            if (targetedElement.closest('.people') || targetedElement.closest('.new-person-section')) {
                return [peopleDataArr, 'person', peopleList, PEOPLE_STORAGE_NAME];
            } else if (targetedElement.closest('.companies') || targetedElement.closest('.new-company-section')) {
                return [companiesDataArr, 'company', companiesList, COMPANIES_STORAGE_NAME];
            } else {
                return [carsDataArr, 'car', carsList, CARS_STORAGE_NAME];
            }
        }

        function changeElementClassAccordingToCondition(element, className, condition) {
            if (element.querySelector(condition)) {
                element.classList.toggle(className);
            } else {
                element.classList.remove(className);
            }
        }

        function getItemIdAndInfoWrapper() {
            const targetedElementWrapper = targetedElement.parentNode;
            const itemId = parseInt(targetedElementWrapper.dataset.id);
            const itemInfoWrapper = targetedElementWrapper.nextElementSibling;
            return {itemId, itemInfoWrapper};
        }

        function getItemData(itemsDataArr, itemId) {
            return itemsDataArr.find(item => item.id === itemId);
        }

        function getItemIndex(itemDataArr, itemId) {
            return itemDataArr.findIndex(item => item.id === itemId);
        }

        function getNewItemId(itemDataArr) {
            // Here we return new id, which is greater than the id of the last one in the list.  If the list of items
            // will be empty, we will return id = 1 instead.
            return itemDataArr.length ? itemDataArr[itemDataArr.length - 1].id + 1 : 1;
        }

        function deleteItem(itemDataArr, itemIndex) {
            itemDataArr.splice(itemIndex, 1);
        }

        function addItem(itemDataArr, newItem) {
            itemDataArr.push(newItem);
        }

        function createConfirmDeletionBlock(wrapper, itemId) {
            wrapper.innerHTML = `
                <div class="confirm-deletion-block">
                    <span>Are you sure?</span>
                    <div data-id="${itemId}">
                        <button class="btn btn-success confirm-deletion-btn">Confirm</button>
                        <button class="btn btn-danger cancel-deletion-btn">Cancel</button>  
                    </div>
                </div>
            `;
        }

        function clearPersonAndCompanyInfoBlocksAccordingToCondition() {
            /*This function is needed because: if we delete car from car-list, this app will update only car list,
            not people and companies list.  So if, for example, at the same time we have opened an edit block for
            person and delete car from list, we can still choose this car to buy from select list in person edit block,
            and this will occur an error.*/
            if (className === 'car') {
                const infoBlocks = document.querySelectorAll('.person-info, .company-info');
                infoBlocks.forEach(block => block.innerHTML = '');
            }
        }

        function updateItemListAndLocalStorage(itemDataArr, itemList, itemName, storageName) {
            itemList.innerHTML = '';
            localStorage.setItem(storageName, JSON.stringify(itemDataArr));
            createItemsList(itemList, itemName, itemDataArr);
        }

        function validateForm(form, regExpArr) {
            hideAllErrorMessages(form);

            function isValid(regEx, str) {
                return regEx.test(str);
            }

            for (let key in regExpArr) {
                const formElement = form.elements[key];

                if (!isValid(regExpArr[key], formElement.value)) {
                    showErrorMessage(formElement.nextElementSibling);
                    return false;
                }
            }

            return true;
        }

        function showErrorMessage(necessaryBlock, message) {
            if (message) {
                necessaryBlock.textContent = message;
            }

            necessaryBlock.classList.remove('hide');
        }

        function hideAllErrorMessages(form) {
            for (let i = 0; i < form.elements.length; i++) {
                const element = form.elements[i];

                if (element.type === 'button') {
                    continue;
                }

                element.nextElementSibling.classList.add('hide')
            }
        }

        function getFormValues(form) {
            let formData = [];

            for (let i = 0; i < form.elements.length; i++) {
                const formElement = form.elements[i];

                if (formElement.type === 'button') {
                    continue;
                }

                if (formElement.type === 'number') {
                    formData.push(parseInt(formElement.value));
                    continue;
                }

                formData.push(formElement.value)
            }

            return formData;
        }

        function createItemAccordingToCondition(condition, ...parameters) {
            if (condition === 'person') {
                return new Person(...parameters);
            } else if (condition === 'company') {
                return new Company(...parameters);
            } else {
                return new Car(...parameters);
            }
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
    }
}