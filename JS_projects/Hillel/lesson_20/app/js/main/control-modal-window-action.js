function controlModalWindowAction() {
    const modalWindowWrapper = document.querySelector('.modal-wrapper');
    const modalWrapperClassName = 'show-modal-wrapper';
    const addTaskBtn = document.querySelector('.add-btn');
    const closeModalWindowBtn = document.querySelector('.close-btn');

    controlOpeningOfModalWindow();
    controlClosingOfModalWindow();

    function controlOpeningOfModalWindow() {
        addTaskBtn.addEventListener('click', handleClickOnAddTaskBtn);

        function handleClickOnAddTaskBtn() {
            addClassForElements(modalWrapperClassName, modalWindowWrapper);
            document.addEventListener('keydown', handleKeyDownOnDocument);
        }
    }

    function controlClosingOfModalWindow() {
        closeModalWindowBtn.addEventListener('click', handleClickOnCloseModalWindowBtn);

        function handleClickOnCloseModalWindowBtn() {
            removeClassFromElements(modalWrapperClassName, modalWindowWrapper);
            document.removeEventListener('keydown', handleKeyDownOnDocument);
        }
    }

    function handleKeyDownOnDocument(e) {
        if (e.key === 'Escape') {
            removeClassFromElements(modalWrapperClassName, modalWindowWrapper);
            document.removeEventListener('keydown', handleKeyDownOnDocument);
        }
    }
}