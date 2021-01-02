'use strict';

function Task(id, name, priority, status = 'open') {
    this.id = id;
    this.name = name;
    this.priority = priority;
    this.status = status;
}