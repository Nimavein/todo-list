import React, { useState } from "react";
import { useGlobalContext } from "./context";

const CategoryForm: React.FC = () => {
  const { createCategory } = useGlobalContext();
  const [formData, setFormData] = useState<Category | {}>();
  const [isCreateCategoryFormOpen, setIsCreateCategoryFormOpen] =
    useState(false);

  const handleFormVisibility = () => {
    if (isCreateCategoryFormOpen === false) {
      setIsCreateCategoryFormOpen(true);
    }
    if (isCreateCategoryFormOpen === true) {
      setIsCreateCategoryFormOpen(false);
    }
  };

  const handleForm = (e: React.FormEvent<HTMLInputElement> | any): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleCreateCategory = (
    e: React.FormEvent,
    formData: Category | any
  ) => {
    e.preventDefault();
    createCategory(formData);
    handleFormVisibility();
  };

  return (
    <div>
      <button onClick={() => handleFormVisibility()}>Add Category</button>
      {isCreateCategoryFormOpen === true ? (
        <div className="category-form-backdrop">
          <form
            className="category-form"
            onSubmit={(e) => handleCreateCategory(e, formData)}
          >
            <label>
              Name:
              <input onChange={handleForm} required type="text" id="name" />
            </label>
            <div className="category-form-buttons">
              <button>Add</button>
              <button onClick={() => handleFormVisibility()} type="button">
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CategoryForm;
