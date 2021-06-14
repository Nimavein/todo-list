import React from "react";
import { useGlobalContext } from "./context";
import Category from "./Category";
import CategoryForm from "./CategoryForm";

const Categories: React.FC = () => {
  const { categories } = useGlobalContext();
  return (
    <div className="categories-container">
      <CategoryForm />
      {categories.map((category: Category) => {
        return <Category key={category.id} {...category} />;
      })}
    </div>
  );
};

export default Categories;
