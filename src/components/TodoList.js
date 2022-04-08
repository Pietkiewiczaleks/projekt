import React from 'react';

import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {

    return(
        <div className="todo-container">
          <ul className="todo-list">
            {filteredTodos.map(todo => (
              <Todo setTodos={setTodos} todos={todos} key={todo.id} todo={todo} text={todo.text} /> //dla każdej pozycji to do trorzymy element z wyremderowany komponent
            ))}
          </ul>
      </div>
    );
};

export default TodoList;