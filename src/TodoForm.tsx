import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

const TodoForm: React.FC = () => {
  const { createTodo, todos } = useGlobalContext();
  const [formData, setFormData] = React.useState<ITodo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleCreateTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    createTodo(formData);
  };
  return (
    <div>
      <form onSubmit={(e) => handleCreateTodo(e, formData)}>
        <label>
          Title:
          <input onChange={handleForm} type="text" id="title" />
        </label>
        <label>
          Description:
          <input onChange={handleForm} type="text" id="description" />
        </label>
        <button disabled={formData === undefined ? true : false}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
