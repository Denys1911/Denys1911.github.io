function controlVisionOfBlocks() {
    const showPeopleBtn = document.querySelector('.people-btn');
    const showCompaniesBtn = document.querySelector('.companies-btn');
    const showCarsBtn = document.querySelector('.cars-btn');
    const peopleBlock = document.querySelector('.people');
    const companiesBlock = document.querySelector('.companies');
    const carsBlock = document.querySelector('.cars');
    const allBlocks = [peopleBlock, companiesBlock, carsBlock];

    showPeopleBtn.addEventListener('click', handleClickOnShowPeopleBtn);
    showCompaniesBtn.addEventListener('click', handleClickOnShowCompaniesBtn);
    showCarsBtn.addEventListener('click', handleClickOnShowCarsBtn);

    function handleClickOnShowPeopleBtn() {
        changeBlocksClassesAccordingToCondition(peopleBlock);
    }

    function handleClickOnShowCompaniesBtn() {
        changeBlocksClassesAccordingToCondition(companiesBlock);
    }

    function handleClickOnShowCarsBtn() {
        changeBlocksClassesAccordingToCondition(carsBlock);
    }

    function changeBlocksClassesAccordingToCondition(element, allElements = allBlocks, changeableClassName = 'hide') {
        if (!element.classList.contains(changeableClassName)) {
            element.classList.add(changeableClassName);
            return;
        }

        allElements.forEach(element => element.classList.add(changeableClassName));
        element.classList.remove(changeableClassName);
    }
}