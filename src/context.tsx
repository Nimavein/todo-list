import React, { useContext, useState } from "react";

const AppContext = React.createContext<ContextType>({} as ContextType);
const AppProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  return (
    <AppContext.Provider value={{ todos }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
