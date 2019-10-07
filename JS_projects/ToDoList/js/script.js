const input = document.querySelector('.input'),
    button = document.querySelector('.button-add'),
    list = document.querySelector('.list');
let todoList = [];

/// *** Showing of tasks after page reloading ///
if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    addTask();
}
///  Showing of tasks after page reloading *** ///

/// *** Launching addTask() after several events ///
button.addEventListener('click', addTask);

input.addEventListener('keypress', e => {
    if (e.key === 'Enter') addTask();
});
/// Launching addTask() after several events *** ///

/// *** Function for adding tasks  ///
function addTask() {
    let newTodo = {
        task: input.value,
        checked: false,
        important: false
    };
    
    if (input.value !== '') todoList.push(newTodo);
    if(todoList.length === 0) list.innerHTML = '';

    let li ='';

    todoList.forEach((item, i) => {
        li += `
            <li class="list__item">
                <label class="${item.important ? 'important' : ''}">
                <input class="list__item-input" id="${i} "type="checkbox" ${item.checked ? 'checked' : ''}>
                <div class="list__item-box"></div>
                    ${i+1}. ${item.task}
                </label>
            </li>
        `;
        list.innerHTML = li;
    });
    localStorage.setItem('todo', JSON.stringify(todoList));
    input.value = '';
}
/// Function for adding tasks *** ///

/// *** updating information about input(checked or not) in the todoList ///
list.addEventListener('change', e => {
    todoList.forEach((item, i) => {
        if (e.target.id == i) {
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });
});
/// updating information about input(checked or not) in the todoList *** ///

/// *** updating information about class important(available or not) in the todoList ///
list.addEventListener('contextmenu', e => {
    e.preventDefault();
    todoList.forEach((item, i) => {
        if (e.target.querySelector('input').id == i) {
            if (e.shiftKey) {todoList.splice(i, 1);}
            item.important = !item.important;
            input.value = '';
            addTask();
        }
    });
});
/// updating information about class important(available or not) in the todoList *** ///

/// *** BUTTON which removes all tasks ///
document.querySelector('.button-clear').addEventListener('click', () => {
    todoList = [];
    list.innerHTML = '';
    localStorage.clear();
});
/// BUTTON which removes all tasks *** ///