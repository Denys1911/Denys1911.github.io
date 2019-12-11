const controlModalFormConfirmation = () => {
    const submitFormBtn = document.querySelector('.submit-form-btn');
    const form = document.querySelector('.modal-form');
    const modalWindowWrapper = document.querySelector('.modal-wrapper');
    const todoList = document.querySelector('.todo-list');

    const handleClickOnSubmitFormBtn = () => {
        hideAllErrorMessages(form);

        if (!validateFormOrShowErrorMessage(form)) {
            return;
        }

        const taskId = getIdForNewTask(tasksArr);
        const formData = getFormData(form);
        const newTask = new Task(taskId, ...formData);
        tasksArr.push(newTask);
        updateTasksListAndLocalStorage(tasksArr, todoList, TASKS_STORAGE_NAME);
        removeClassFromElements('show-modal-wrapper', modalWindowWrapper);
        clearAllFormFields(form);
    };

    submitFormBtn.addEventListener('click', handleClickOnSubmitFormBtn);
};