import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

type ITodoProps = {
  id: number;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: boolean;
};

const Todo: React.FC<ITodoProps> = ({
  id,
  title,
  description,
  priority,
  status,
}) => {
  const { deleteTodo, updateTodo } = useGlobalContext();
  return (
    <div className={status === false ? "todo-active" : "todo-done"}>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <h3>{priority}</h3>
      <button onClick={(e) => updateTodo(id)}>change status</button>
      <button onClick={(e) => deleteTodo(id)}>delete</button>
    </div>
  );
};

export default Todo;
