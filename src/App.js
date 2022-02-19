import React, { useState } from "react";
import data from "./data.json";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoButton from "./TodoButton";
import './App.css';

function App() {

  const [toDoList, setToDoList]= useState(data);

  const handleToggle = (id) => {
    let mapped= toDoList.map((content)=> {
      return content.id === Number(id)
      ? {...content, complete: !content.complete}
      : {...content};
    });
    setToDoList(mapped);
  };

  const addContent = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, content: userInput, complete: true}];
    setToDoList(copy);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="container-box">
        <div className="todo-form">
           <TodoForm addContent={addContent} />
        </div>
        <div className="todo-button">
          <TodoButton />
        </div>
        <div className="todo-list">
          <TodoList toDoList={toDoList} handleToggle={handleToggle}/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
