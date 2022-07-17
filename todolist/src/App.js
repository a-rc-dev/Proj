import './App.css';
import React, { useState, useEffect } from 'react';
import Form from "./component/Form"
import TodoList from "./component/TodoList"
import userEvent from '@testing-library/user-event';

function App() {

  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);

  const [status, setStatus] = useState("all");

  const [filteredTodos, setFilteredTodos] = useState([]);
 
  useEffect(() => {
    getLocalTodos();
  }, []);




  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos,status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }


  }


  const saveLocalTodos= () =>{
 

    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos",JSON.stringify([]));
    }else{
      localStorage.setItem('todos', JSON.stringify(todos));
  }
  

  };

  const getLocalTodos= () =>{

    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos",JSON.stringify([]));
    }else{

      let local=  JSON.parse(localStorage.getItem("todos"));
      setTodos(local);
    }

  };


  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List </h1>
      </header>
      <Form  setStatus={setStatus} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList filteredTodos={filteredTodos}todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
