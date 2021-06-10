import React from "react";
import Categories from "./Categories";
import Navbar from "./Navbar";
import TodosContainer from "./TodosContainer";

function App() {
  return (
    <div>
      <Navbar />
      <Categories />
      <TodosContainer />
    </div>
  );
}

export default App;
