import React, { useState, useEffect } from "react";
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
      {categoryName}
      <div>
        <button onClick={() => handleFormVisibility()}>
          {isFormOpen === false ? "Add task" : "X"}{" "}
        </button>
      </div>
      {isFormOpen === true && (
        <TodoForm categoryName={categoryName} categoryID={categoryID} />
      )}

      {todos.map((todo: ITodo) => {
        console.log(todos);
        if (categoryName === todo.category) {
          return <Todo key={todo.id} {...todo} categoryName={categoryName} />;
        }
      })}
    </div>
  );
};

export default TodosContainer;
