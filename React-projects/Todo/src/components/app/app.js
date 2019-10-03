import React, {Component} from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";

import './app.css';

export default class App extends Component{
    maxId = 1;

    createTodoItem = label => {
       return {
           label,
           done: false,
           important: false,
           id: this.maxId++,
       }
    };

    state = {
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Make awesome app'),
            this.createTodoItem('Do homework in Hillel'),
        ],
        term: '',
        filter: 'all'
    };

    deleteItem = id => {
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

    addItem = text => {
        const newItem = this.createTodoItem(text);
        this.setState(({todoData}) => {
            const newArray = [
                ...todoData, newItem
            ];
            return {
                todoData: newArray
            }
        })
    };

    toggleProperty = (arr, id, propName) => {
        const index = arr.findIndex(item => item.id === id),
            oldElement = arr[index],
            newElement = {...oldElement, [propName]: !oldElement[propName]};
            return [
                ...arr.slice(0, index),
                newElement,
                ...arr.slice(index + 1)
            ];
    };

    onToggleDone = id => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    };

    onToggleImportant = id => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    };

    onSearchChange = term => {
        this.setState({term})
    };

    onFilterChange = filter => {
        this.setState({filter})
    };

    search = (items, text) => {
        if (text.length === 0) {
            return items;
        }

        return items.filter(item => {
            const regexp = new RegExp(text, 'gi');
            return regexp.test(item.label);
        });
    };

    filter = (items, filter) => {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter(item => !item.done);
            case 'done':
                return items.filter(item => item.done);
            default:
                return items;
        }
    };

    render() {
        const {todoData, term, filter} = this.state,
            visibleItems = this.filter(this.search(todoData, term), filter),
            doneCount = todoData.filter(item => item.done).length,
            todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader todo={todoCount} done={doneCount}/>
                <div className="top-panel d-sm-flex text-center">
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter onFilterChange={this.onFilterChange}
                                      filter={filter}
                    />
                </div>
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
};

