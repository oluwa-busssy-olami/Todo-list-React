import React from "react";
import FormSection from "./FormSection";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div className="container">
      {" "}
      <FormSection /> <TodoList />
    </div>
  );
};

export default TodoApp;
