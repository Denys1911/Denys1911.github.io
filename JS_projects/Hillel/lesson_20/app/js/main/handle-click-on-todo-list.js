function handleClickOnTodoList(e) {
    const todoList = document.querySelector('.todo-list');
    const targetedElement = e.target;

    if (targetedElement.classList.contains('edit-btn')) {
        handleClickOnEditBtn();
    }

    if (targetedElement.classList.contains('confirm-name-changing-btn')) {
        handleClickOnConfirmNameChangingBtn();
    }

    if (targetedElement.classList.contains('delete-btn')) {
        handleClickOnDeleteBtn();
    }

    if (targetedElement.classList.contains('confirm-deletion-btn')) {
        handleClickOnConfirmDeletionBtn();
    }

    if (targetedElement.classList.contains('cancel-deletion-btn')) {
        handleClickOnCancelDeletionBtn();
    }

    if (targetedElement.classList.contains('change-status-btn')) {
        handleClickOnChangeStatusOrPriorityBtn('status');
    }

    if (targetedElement.classList.contains('change-priority-btn')) {
        handleClickOnChangeStatusOrPriorityBtn('priority');
    }

    function handleClickOnEditBtn() {
        const [, infoBlock] = getTargetedElementWrapperAndInfoBlock();

        infoBlock.innerHTML = createTaskNameChangingForm();
    }

    function handleClickOnConfirmNameChangingBtn() {
        const [targetedElementWrapper] = getTargetedElementWrapperAndInfoBlock();
        const taskId = getTaskIdFromAttribute(targetedElementWrapper);
        const form = targetedElement.parentNode;

        hideAllErrorMessages(form);

        if (!validateFormOrShowErrorMessage(form)) {
            return;
        }

        const newTaskName = form.querySelector('.task-name-input').value;
        const taskDataArr = getTaskData(tasksArr, taskId);
        taskDataArr.name = newTaskName;
        updateTasksListAndLocalStorage(tasksArr, todoList, TASKS_STORAGE_NAME);
    }

    function handleClickOnDeleteBtn() {
        const [, infoBlock] = getTargetedElementWrapperAndInfoBlock();
        infoBlock.innerHTML = createConfirmDeletionBlock(infoBlock);
    }

    function handleClickOnConfirmDeletionBtn() {
        const [targetedElementWrapper] = getTargetedElementWrapperAndInfoBlock();
        const taskId = getTaskIdFromAttribute(targetedElementWrapper);
        const taskIndex = getTaskIndex(tasksArr, taskId);
        tasksArr.splice(taskIndex, 1);
        updateTasksListAndLocalStorage(tasksArr, todoList, TASKS_STORAGE_NAME);
    }

    function handleClickOnCancelDeletionBtn() {
        const [, infoBlock] = getTargetedElementWrapperAndInfoBlock();
        infoBlock.innerHTML = '';
    }

    function handleClickOnChangeStatusOrPriorityBtn(name) {
        const [targetedElementWrapper, infoBlock] = getTargetedElementWrapperAndInfoBlock();
        const selectedValue = targetedElement.previousElementSibling.value;
        const taskId = getTaskIdFromAttribute(targetedElementWrapper);

        if (!selectedValue) {
            infoBlock.innerHTML = createErrorMessage(`Please, select ${name} first`);
            return;
        }

        const taskDataArr = getTaskData(tasksArr, taskId);
        taskDataArr[name] = selectedValue;
        updateTasksListAndLocalStorage(tasksArr, todoList, TASKS_STORAGE_NAME);
    }

    function getTargetedElementWrapperAndInfoBlock() {
        const targetedElementWrapper = targetedElement.closest('.todo-list-item');
        const infoBlock = targetedElementWrapper.querySelector('.todo-list-item-info');

        return [targetedElementWrapper, infoBlock];
    }

    function getTaskIdFromAttribute(wrapper) {
        const taskId = wrapper.dataset.id;
        return parseInt(taskId);
    }
}