function addClassForElements(className, ...elements) {
    elements.forEach(element => element.classList.add(className));
}

function removeClassFromElements(className, ...elements) {
    elements.forEach(element => element.classList.remove(className));
}

function validateFormOrShowErrorMessage(form) {
    for (let formElement of form) {
        if (!formElement.value) {
            showErrorMessage(formElement.parentNode);
            return false;
        }
    }

    return true;
}

function showErrorMessage(element) {
    removeClassFromElements('hide', element.nextElementSibling);
}

function hideAllErrorMessages(wrapper) {
    const errorMessages = wrapper.querySelectorAll('.error-message');
    addClassForElements('hide', ...errorMessages);
}

function clearAllFormFields(form) {
    for (let formElement of form) {
        if (formElement.type === 'button') {
            continue;
        }

        formElement.value = '';
    }
}

function getFormData(form) {
    let formData = [];

    for (let formElement of form) {
        if (formElement.type === 'button') {
            continue;
        }

        formData.push(formElement.value);
    }

    return formData;
}

function getIdForNewTask(tasksArr) {
    if (!tasksArr.length) {
        return 1;
    }

    const indexOfLastTaskInArr = tasksArr.length - 1;
    const idOfLastTaskInArr = tasksArr[indexOfLastTaskInArr].id;

    return idOfLastTaskInArr + 1;
}

function updateTasksListAndLocalStorage(tasksArr, tasksList, storageName) {
    tasksList.innerHTML = createAllTasksHTML(tasksArr);
    localStorage.setItem(storageName, JSON.stringify(tasksArr));
}

function getTaskData(tasksArr, taskId) {
    return tasksArr.find(task => task.id === taskId);
}

function getTaskIndex(tasksArr, taskId) {
    return tasksArr.findIndex(task => task.id === taskId);
}

function createConfirmDeletionBlock() {
    return `
        <div class="confirm-deletion-block">
            <span>Are you sure?</span>
            <div>
                <button class="confirm-deletion-btn">Confirm</button>
                <button class="cancel-deletion-btn">Cancel</button>
            </div>
        </div>
    `;
}

function createTaskNameChangingForm() {
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
}

function createErrorMessage(errorText) {
    return `<div class="error-message">${errorText}</div>`;
}