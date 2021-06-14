import React from "react";
import { useGlobalContext } from "./context";

type TodosFormProps = {
  categoryName: string;
  categoryID: number;
  handleFormVisibility: any;
};

const TodoForm: React.FC<TodosFormProps> = ({
  categoryName,
  handleFormVisibility,
}) => {
  const { createTodo } = useGlobalContext();
  const [formData, setFormData] = React.useState<ITodo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement> | any): void => {
    setFormData({
      category: categoryName,
      priority: "low",
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleCreateTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    createTodo(formData);
    handleFormVisibility();
  };
  return (
    <div className="todo-form-backdrop">
      <form
        className="todo-form"
        onSubmit={(e) => handleCreateTodo(e, formData)}
      >
        <div className="todo-form-inputs">
          <label className="title-label">
            Title:
            <input
              className="title-input"
              onChange={handleForm}
              required
              type="text"
              id="title"
            />
          </label>
          <label className="description-label">
            Description:
            <input
              className="description-input"
              onChange={handleForm}
              required
              type="text"
              id="description"
            />
          </label>
          <label className="priority-label">
            Priority:
            <select
              className="priority-input"
              onChange={handleForm}
              required
              id="priority"
            >
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </label>
        </div>

        <div className="todo-form-buttons">
          <button className="add-todo-form-button">Add</button>
          <button
            className="cancel-todo-button"
            onClick={() => handleFormVisibility()}
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
