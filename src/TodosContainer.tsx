import React, { useState } from "react";
import { useGlobalContext } from "./context";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

type TodosContainerProps = {
  categoryName: string;
  categoryID: number;
};

const TodosContainer: React.FC<TodosContainerProps> = ({
  categoryName,
  categoryID,
}) => {
  const { todos } = useGlobalContext();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormVisibility = () => {
    if (isFormOpen === false) {
      setIsFormOpen(true);
    }
    if (isFormOpen === true) {
      setIsFormOpen(false);
    }
  };

  return (
    <div className="todos-container">
      <div>
        {todos.map((todo: ITodo) => {
          if (categoryName === todo.category) {
            return <Todo key={todo.id} {...todo} categoryName={categoryName} />;
          }
        })}
        <button
          className="add-todo-button"
          onClick={() => handleFormVisibility()}
        >
          Add task
        </button>
      </div>
      {isFormOpen === true && (
        <TodoForm
          categoryName={categoryName}
          categoryID={categoryID}
          handleFormVisibility={handleFormVisibility}
        />
      )}
    </div>
  );
};

export default TodosContainer;
