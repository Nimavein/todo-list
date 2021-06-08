import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodosContainer: React.FC = () => {
  const { todos } = useGlobalContext();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormVisibility = () => {
    if (isFormOpen === false) {
      setIsFormOpen(true);
      alert("XD");
    }
    if (isFormOpen === true) {
      setIsFormOpen(false);
      alert("nope");
    }
  };

  return (
    <div className="todos-container">
      <div>
        <button onClick={() => handleFormVisibility()}>
          {isFormOpen === false ? "Add task" : "X"}{" "}
        </button>
      </div>
      {isFormOpen === true && <TodoForm />}

      {todos.map((todo: ITodo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </div>
  );
};

export default TodosContainer;
