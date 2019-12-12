const addClassForElements =
    (className, ...elements) => elements.forEach(element => element.classList.add(className));

const removeClassFromElements =
    (className, ...elements) => elements.forEach(element => element.classList.remove(className));

const validateFormOrShowErrorMessage = form => {
    for (let formElement of form) {
        if (!formElement.value) {
            showErrorMessage(formElement.parentNode);
            return false;
        }
    }

    return true;
};

const showErrorMessage = element => removeClassFromElements('hide', element.nextElementSibling);

const hideAllErrorMessages = wrapper => {
    const errorMessages = wrapper.querySelectorAll('.error-message');
    addClassForElements('hide', ...errorMessages);
};

const clearAllFormFields = form => {
    for (let formElement of form) {
        if (formElement.type === 'button') {
            continue;
        }

        formElement.value = '';
    }
};

const getFormData = form => {
    let formData = [];

    for (let formElement of form) {
        if (formElement.type === 'button') {
            continue;
        }

        formData.push(formElement.value);
    }

    return formData;
};

const getIdForNewTask = tasksArr => {
    if (!tasksArr.length) {
        return 1;
    }

    const indexOfLastTaskInArr = tasksArr.length - 1;
    const idOfLastTaskInArr = tasksArr[indexOfLastTaskInArr].id;

    return idOfLastTaskInArr + 1;
};

const updateTasksListAndLocalStorage = (tasksArr, tasksList, storageName) => {
    tasksList.innerHTML = createAllTasksHTML(tasksArr);
    localStorage.setItem(storageName, JSON.stringify(tasksArr));
};

const getTaskData = (tasksArr, taskId) => tasksArr.find(task => task.id === taskId);

const getTaskIndex = (tasksArr, taskId) => tasksArr.findIndex(task => task.id === taskId);

const createConfirmDeletionBlock = () => {
    return `
        <div class="confirm-deletion-block">
            <span>Are you sure?</span>
            <div>
                <button class="confirm-deletion-btn">Confirm</button>
                <button class="cancel-deletion-btn">Cancel</button>
            </div>
        </div>
    `;
};

const createTaskNameChangingForm = () => {
    return `
        <form class="change-task-name-form">
            <label>
                Enter new task name:
                <input type="text" class="task-name-input" placeholder="Name...">
            </label>
             <div class="error-message hide">Please, fill this field first</div>
            <input type="button" class="confirm-name-changing-btn" value="Submit">
        </form>
    `;
};

const createErrorMessage = errorText => `<div class="error-message">${errorText}</div>`;
