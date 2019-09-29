import React, {Component} from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";

import './app.css';

export default class App extends Component{
    state = {
        todoData: [
            {label: 'Drink coffee', id: 1},
            {label: 'Make awesome app', id: 2},
            {label: 'Do homework in Hillel', id: 3},
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex(item => item.id === id),
                newArray = [
                    ...todoData.slice(0, index),
                    ...todoData.slice(index + 1)
                ];
            return {
                todoData: newArray
            }
        })
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-sm-flex text-center">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                />
            </div>
        );
    }
};

