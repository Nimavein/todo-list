import React, { useState } from "react";
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
        <h2 className="category-name">{name}</h2>
        <div>
          <button
            className="category-delete-button"
            onClick={(e) => deleteCategory(id)}
          >
            <i className="fa fa-trash fa-2x"></i>
          </button>

          <button
            onClick={() => handleCategoryVisibility()}
            className={
              !isCategoryOpen ? "show-more-button" : "show-more-button open"
            }
          >
            <i className="fa fa-chevron-down fa-2x"></i>
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
