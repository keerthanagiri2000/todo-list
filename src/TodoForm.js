import React from "react";
import {useState} from "react";

const TodoForm = ({addContent}) => {
    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    };
   
    const handleSubmit = (e) => {
        e.preventDefault();
        addContent(userInput);
        setUserInput("");
    };
    return (
        <form onSubmit={handleSubmit} className="input-form">
         <input 
          value={userInput}
          type="text"
          onChange={handleChange}
          className="input-field"
          placeholder="New Task..."
         />
        </form>
    );
};

export default TodoForm;