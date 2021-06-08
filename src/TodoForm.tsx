import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

const todoForm = ({}) => {
  const { createTodo } = useGlobalContext();

  const handleCreateTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    createTodo(formData);
  };
};
