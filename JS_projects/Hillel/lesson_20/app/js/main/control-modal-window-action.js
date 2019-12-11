const controlModalWindowAction = () => {
    const modalWindowWrapper = document.querySelector('.modal-wrapper');
    const modalWrapperClassName = 'show-modal-wrapper';
    const addTaskBtn = document.querySelector('.add-btn');
    const closeModalWindowBtn = document.querySelector('.close-btn');

    const controlOpeningOfModalWindow = () => {
        const handleClickOnAddTaskBtn = () => {
            addClassForElements(modalWrapperClassName, modalWindowWrapper);
            document.addEventListener('keydown', handleKeyDownOnDocument);
        };

        addTaskBtn.addEventListener('click', handleClickOnAddTaskBtn);
    };

    const controlClosingOfModalWindow = () => {
        const handleClickOnCloseModalWindowBtn = () => {
            removeClassFromElements(modalWrapperClassName, modalWindowWrapper);
            document.removeEventListener('keydown', handleKeyDownOnDocument);
        };

        closeModalWindowBtn.addEventListener('click', handleClickOnCloseModalWindowBtn);
    };

    const handleKeyDownOnDocument = e => {
        if (e.key === 'Escape') {
            removeClassFromElements(modalWrapperClassName, modalWindowWrapper);
            document.removeEventListener('keydown', handleKeyDownOnDocument);
        }
    };

    controlOpeningOfModalWindow();
    controlClosingOfModalWindow();
};