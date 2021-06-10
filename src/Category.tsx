import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import TodosContainer from "./TodosContainer";

type CategoryProps = {
  id: number;
  name: string;
};

const Category: React.FC<CategoryProps> = ({ name, id }) => {
  const { deleteCategory } = useGlobalContext();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const handleCategoryVisibility = () => {
    if (isCategoryOpen === false) {
      setIsCategoryOpen(true);
    }
    if (isCategoryOpen === true) {
      setIsCategoryOpen(false);
    }
  };

  return (
    <div>
      <div className="category-title-container">
        <h1>{name}</h1>
        <div>
          <button
            className="category-delete-button"
            onClick={(e) => deleteCategory(id)}
          >
            delete
          </button>
          <button
            onClick={() => handleCategoryVisibility()}
            className="show-more-button"
          >
            {isCategoryOpen === false ? "more" : "less"}
          </button>
        </div>
      </div>

      {isCategoryOpen === true && (
        <TodosContainer categoryName={name} categoryID={id} />
      )}
    </div>
  );
};

export default Category;
