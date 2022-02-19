import React from "react";
import Todo from "./Todo";

const ToDoList = ({ toDoList, handleToggle}) => {
    return(
        <div>
            {
                toDoList.map((todo) => {
                    return (
                        <Todo todo={todo} handleToggle={handleToggle} />
                    );
                })}
        </div>
    );
};

export default ToDoList;