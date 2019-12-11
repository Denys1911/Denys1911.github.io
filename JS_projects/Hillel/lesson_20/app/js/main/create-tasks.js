const createTaskHTML = task => {
    const {id, name, status, priority} = task;

    return `
        <li class="todo-list-item" data-id="${id}">
            <div class="todo-list-item-top">
                <span class="task-name">${name}</span>
                <div>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button> 
                </div>
            </div>
            <div class="todo-list-item-bottom">
                <div>
                    <span><i>Current status:</i> ${status}</span>
                    <select>
                        <option value="">Select status</option>
                        <option value="open">Open</option>
                        <option value="in progress">In progress</option>
                        <option value="done">Done</option>
                    </select>
                    <button class="change-status-btn">Change status</button>
                </div>
                <div>
                    <span class="${priority}"><i>Current priority:</i> ${priority}</span>
                    <select>
                        <option value="">Select priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <button class="change-priority-btn">Change priority</button>
                </div>
            </div>
            <div class="todo-list-item-info"></div>
        </li>
    `;
};

const createAllTasksHTML = tasksArr => {
    return tasksArr.map(createTaskHTML).join('');
};