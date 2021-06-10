import { type } from "os";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

type TodosEditFormProps = {
  id: number;
};

const TodoEditForm: React.FC<TodosEditFormProps> = ({ id }) => {
  const { editTodo, todos } = useGlobalContext();
  const [formData, setFormData] = React.useState<ITodo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement> | any): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
    console.log(todos);
  };

  const handleEditTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    editTodo(id, formData);

    console.log(todos);
  };
  return (
    <div>
      <form className="todo-form" onSubmit={(e) => handleEditTodo(e, formData)}>
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
        <button>Edit Todo</button>
      </form>
    </div>
  );
};

export default TodoEditForm;
