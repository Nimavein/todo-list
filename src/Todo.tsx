import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

type ITodoProps = {
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
};

const Todo: React.FC<ITodoProps> = ({ title, description, priority }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <h3>{priority}</h3>
    </div>
  );
};

export default Todo;
