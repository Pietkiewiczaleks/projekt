import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState(''); //wartość i funkcja zmieniająca wartość 
  const [todos, setTodos] = useState([]); 
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => { 
    saveLocalTodos();
    getLocalTodos();
  }, []);

  useEffect(() => { // działa za każdym razem jak zmienia się status/todos
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true)); //filtruje zrobione todo
        break;
      case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false)); //filtruje niezrobione todo
        break;
      default:
        setFilteredTodos(todos); //pokaż wszystkie defoltowo
        break;
    }
  };

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
    };
  // function saveLocalTodos(todo) {
  //   let todos;
  //   if (localStorage.getItem("todos") === null) {
  //     todos = [];
  //   } else {
  //     todos = JSON.parse(localStorage.getItem("todos"));
  //   }

  return (
    <div className="App">
      <header>
        <h1>GetOrganized <br /> <h4>  by  Aleksandra  Pietkiewicz</h4></h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        setStatus={setStatus}
        />
      <TodoList 
        setTodos={setTodos} 
        todos={todos} 
        filteredTodos={filteredTodos}
        />
    </div>
  );
  }

export default App;
