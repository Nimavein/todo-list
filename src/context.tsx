import React, { useContext, useState } from "react";

const AppContext = React.createContext<ContextType>({} as ContextType);

const AppProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      name: "first category",
    },
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
        todo.status = true;
        setTodos([...todos]);
      }
    });
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <AppContext.Provider
      value={{ todos, categories, createTodo, updateTodo, deleteTodo }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
