import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import Todo from "./Todo";

const TodosContainer: React.FC = () => {
  const { todos } = useGlobalContext();

  return (
    <div className="todos-container">
      {todos.map((todo: ITodo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </div>
  );
};

export default TodosContainer;
