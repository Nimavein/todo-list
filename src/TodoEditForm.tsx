import React from "react";
import { useGlobalContext } from "./context";

type TodosEditFormProps = {
  id: number;
  handleEditVisibility: any;
};

const TodoEditForm: React.FC<TodosEditFormProps> = ({
  id,
  handleEditVisibility,
}) => {
  const { editTodo, todos } = useGlobalContext();
  const [formData, setFormData] = React.useState<ITodo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement> | any): void => {
    setFormData({
      priority: "low",
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
    console.log(todos);
  };

  const handleEditTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    editTodo(id, formData);
    handleEditVisibility();
  };
  return (
    <div className="todo-form-backdrop">
      <form className="todo-form" onSubmit={(e) => handleEditTodo(e, formData)}>
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
          <button className="add-todo-form-button">Edit</button>
          <button
            className="cancel-todo-button"
            onClick={() => handleEditVisibility()}
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoEditForm;
