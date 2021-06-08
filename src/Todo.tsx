import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

type ITodoProps = {
  title: string;
  description: string;
};

const Todo: React.FC<ITodoProps> = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
};

export default Todo;
