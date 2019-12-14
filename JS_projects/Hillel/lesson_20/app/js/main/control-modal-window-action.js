const controlModalWindowAction = () => {
    const modalWindowWrapper = document.querySelector('.modal-wrapper');
    const modalWrapperClassName = 'show-modal-wrapper';
    const addTaskBtn = document.querySelector('.add-btn');
    const closeModalWindowBtn = document.querySelector('.close-btn');

    const handleKeyDownOnDocument = e => {
        if (e.key === 'Escape') {
            handleClickOnCloseModalWindowBtn();
        }
    };

    const handleClickOnAddTaskBtn = () => {
        addClassForElements(modalWrapperClassName, modalWindowWrapper);
        document.addEventListener('keydown', handleKeyDownOnDocument);
    };

    const handleClickOnCloseModalWindowBtn = () => {
        removeClassFromElements(modalWrapperClassName, modalWindowWrapper);
        document.removeEventListener('keydown', handleKeyDownOnDocument);
    };

    addTaskBtn.addEventListener('click', handleClickOnAddTaskBtn);
    closeModalWindowBtn.addEventListener('click', handleClickOnCloseModalWindowBtn);
};