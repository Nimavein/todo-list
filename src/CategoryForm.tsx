import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

const CategoryForm: React.FC = () => {
  const { createCategory, categories } = useGlobalContext();
  const [formData, setFormData] = React.useState<Category | {}>();

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
  };

  return (
    <div>
      <form
        className="category-form"
        onSubmit={(e) => handleCreateCategory(e, formData)}
      >
        <label>
          Name:
          <input onChange={handleForm} required type="text" id="name" />
        </label>
        <button>Add Category</button>
      </form>
    </div>
  );
};

export default CategoryForm;
