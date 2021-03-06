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
      title: "todo1",
      status: true,
      priority: "low",
      category: "work",
      description: "lfnsknfl",
    },
  ]);

  const createCategory = (category: Category) => {
    const newCategory: Category = {
      id: Math.random(),
      name: category.name,
    };
    if (categories.some((e) => e.name === newCategory.name)) {
      alert("category already exists");
    } else {
      setCategories([...categories, newCategory]);
    }
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

  const editTodo = (id: number, editedTodo: ITodo) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.id = id;
        todo.title = editedTodo.title;
        todo.description = editedTodo.description;
        todo.status = false;
        todo.priority = editedTodo.priority;
        todo.category = todo.category;
        setTodos([...todos]);
      }
    });
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
        editTodo,
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
