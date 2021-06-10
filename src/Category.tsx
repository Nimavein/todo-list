import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

type CategoryProps = {
  id: number;
  name: string;
};

const Category: React.FC<CategoryProps> = ({ name, id }) => {
  const { deleteCategory } = useGlobalContext();
  return (
    <div>
      <div className="category-title-container">
        <h1>{name}</h1>
        <button
          className="category-delete-button"
          onClick={(e) => deleteCategory(id)}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Category;
