import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e) => { //reaguje na zmiany w input
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault(); //blokuje odswiezanie 
    setTodos([
      ...todos, {text: inputText, completed:false, id: Math.random() * 1000 }
    ]);
    setInputText('');// zmienia text w input na pusty
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }
    return(
        <form>
        <input 
          value={inputText} //umozliwia dodanie wartosci do array
          onChange={inputTextHandler} 
          type="text" 
          className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Done</option>
            <option value="uncompleted">To do</option>
          </select>
        </div>
      </form>
    );
};

export default Form;