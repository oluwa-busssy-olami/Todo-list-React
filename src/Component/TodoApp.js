import React, { useState } from "react";
import FormSection from "./FormSection";
import TodoList from "./TodoList";
import { nanoid } from "nanoid";

//TODO: w need to find a way to bring taht new task into the TodoApp
// we use the callbackFunction to pass to information from the child to parent
//we use that concept of state to modifidy stuff in our component
const TodoApp = () => {
  const initialTasks = [];
  const [tasks, setTasks] = useState(initialTasks);

  const addNewTask = (task) => {
    console.log(`In the todoApp: The new task is ${task}`);
    const taskObject = {
      id: nanoid(),
      name: task,
    };
    const updatedTasks = [taskObject, ...tasks];
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      {" "}
      <FormSection handleClick={addNewTask} /> <TodoList tasks={tasks} />
    </div>
  );
};

export default TodoApp;
