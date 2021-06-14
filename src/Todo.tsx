import React, { useState } from "react";
import { useGlobalContext } from "./context";
import TodoEditForm from "./TodoEditForm";

type ITodoProps = {
  id: number;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: boolean;
  categoryName: string;
};

const Todo: React.FC<ITodoProps> = ({
  id,
  title,
  description,
  priority,
  status,
}) => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEditVisibility = () => {
    if (isEditOpen === false) {
      setIsEditOpen(true);
    }
    if (isEditOpen === true) {
      setIsEditOpen(false);
    }
  };
  const { deleteTodo, updateTodo } = useGlobalContext();
  return (
    <div className={status === false ? "todo todo-active" : " todo todo-done"}>
      <button
        className="change-todo-status-button"
        onClick={(e) => updateTodo(id)}
      >
        {status === true ? (
          <i className="fa fa-check fa-2x "></i>
        ) : (
          <div className="placeholder"></div>
        )}
      </button>
      <p className="todo-title">{title}</p>
      <div
        className={
          status === true
            ? "disabled"
            : priority === "low"
            ? "priority-low"
            : priority === "medium"
            ? "priority-medium"
            : "priority-high"
        }
      ></div>
      <p className="todo-description">{description}</p>

      <div className="todo-buttons">
        <button
          className="edit-todo-button"
          onClick={(e) => handleEditVisibility()}
        >
          <i className="fa fa-edit fa-2x "></i>
        </button>
        <button className="delete-todo-button" onClick={(e) => deleteTodo(id)}>
          <i className="fa fa-trash fa-2x "></i>
        </button>
      </div>

      {isEditOpen === false ? (
        ""
      ) : (
        <TodoEditForm id={id} handleEditVisibility={handleEditVisibility} />
      )}
    </div>
  );
};

export default Todo;
