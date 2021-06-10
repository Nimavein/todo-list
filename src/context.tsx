import React, { useContext, useState } from "react";

const AppContext = React.createContext<ContextType>({} as ContextType);

const AppProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "home" },
    { id: 2, name: "work" },
    { id: 3, name: "meetings" },
  ]);
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      title: "post 1",
      description: "this is my first description",
      status: false,
      priority: "low",
      category: categories[0],
    },
  ]);

  //const setNewCategories = () => {
  //  const allCategories = ["all", new Set(todos.map((todo) => todo.category))];
  //  setCategories(allCategories);
  //};

  const createCategory = (category: Category) => {
    const newCategory: Category = {
      id: Math.random(),
      name: category.name,
    };
    setCategories([...categories, newCategory]);
  };

  const deleteCategory = (id: number) => {
    const newCategories = categories.filter((category) => category.id !== id);
    setCategories(newCategories);
  };

  const createTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(),
      title: todo.title,
      description: todo.description,
      status: false,
      priority: todo.priority,
      category: todo.category,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        if (todo.status === false) {
          todo.status = true;
          setTodos([...todos]);
        } else {
          todo.status = false;
          setTodos([...todos]);
        }
      }
    });
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <AppContext.Provider
      value={{
        todos,
        categories,
        createCategory,
        deleteCategory,
        createTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
