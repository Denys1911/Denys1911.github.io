import React from "react";
import './app-header.css';

const AppHeader = ({toDo, done}) => {
    return (
      <div className="app-header d-sm-flex text-center">
          <h1>Todo List</h1>
          <h2>{toDo} more to do, {done} done</h2>
      </div>
    );
};

export default AppHeader;

