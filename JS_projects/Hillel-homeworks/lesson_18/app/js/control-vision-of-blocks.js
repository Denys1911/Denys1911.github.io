function controlVisionOfBlocks() {
    const showPeopleBtn = $('.people-btn');
    const showCompaniesBtn = $('.companies-btn');
    const showCarsBtn = $('.cars-btn');
    const peopleBlock = $('.people');
    const companiesBlock = $('.companies');
    const carsBlock = $('.cars');

    showPeopleBtn.on('click', handleClickOnShowPeopleBtn);
    showCompaniesBtn.on('click', handleClickOnShowCompaniesBtn);
    showCarsBtn.on('click', handleClickOnShowCarsBtn);

    function handleClickOnShowPeopleBtn() {
        changeBlocksClassesAccordingToCondition(peopleBlock);
    }

    function handleClickOnShowCompaniesBtn() {
        changeBlocksClassesAccordingToCondition(companiesBlock);
    }

    function handleClickOnShowCarsBtn() {
        changeBlocksClassesAccordingToCondition(carsBlock);
    }

    function changeBlocksClassesAccordingToCondition(element, changeableClassName = 'hide') {
        const allBlocks = $('.people, .companies, .cars');

        if (!element.hasClass(changeableClassName)) {
            element.addClass(changeableClassName);
            return;
        }

        allBlocks.addClass(changeableClassName);
        element.removeClass(changeableClassName);
    }
}