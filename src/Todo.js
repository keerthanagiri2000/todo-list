import React from "react";

const Todo = ({ todo, handleToggle}) => {
    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.id);
    };

    return (
        <div
        id={todo.id}
        key={todo.id + todo.content}
        name="todo"
        value={todo.id}
        className="todo-list-div"
        onClick={handleClick}>

        <input 
        type="checkbox"
        className="check"
        onChange={() => handleToggle(!todo)}
        />
        

        {/*<span className={todo.complete ? "todo" : "todo strike"} >{todo.content} </span>*/}
        <span className={todo.complete ? "" : "strike"}>{todo.content}</span>

        </div>
    );
};

export default Todo;