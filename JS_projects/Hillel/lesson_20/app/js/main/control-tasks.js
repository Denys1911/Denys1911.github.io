async function controlTasks() {
    const todoList = document.querySelector('.todo-list');

    tasksArr = await prepareData(TASKS_STORAGE_NAME);
    todoList.innerHTML = createAllTasksHTML(tasksArr);
    todoList.addEventListener('click', handleClickOnTodoList);
}