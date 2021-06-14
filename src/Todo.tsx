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
      <h1>{title}</h1>
      <h3>{description}</h3>
      <h3>{priority}</h3>
      <div className="todo-buttons">
        <button onClick={(e) => updateTodo(id)}>change status</button>
        <button onClick={(e) => deleteTodo(id)}>delete</button>
        <button onClick={(e) => handleEditVisibility()}>edit</button>
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
