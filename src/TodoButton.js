import React from "react";

  function TodoButton({todo}) {
    return(
        <div className="todo-button-div">
            <button type="button">All</button>
            <button type="button">Active</button>
            <button type="button">Completed</button>
        </div>
    )
}
export default TodoButton;