import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

const TodoForm: React.FC = () => {
  const { createTodo, todos } = useGlobalContext();
  const [formData, setFormData] = React.useState<ITodo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement> | any): void => {
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
      <form
        className="todo-form"
        onSubmit={(e) => handleCreateTodo(e, formData)}
      >
        <label>
          Title:
          <input onChange={handleForm} required type="text" id="title" />
        </label>
        <label>
          Description:
          <input onChange={handleForm} required type="text" id="description" />
        </label>
        <label>
          Priority:
          <select onChange={handleForm} required id="priority">
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        </label>
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
