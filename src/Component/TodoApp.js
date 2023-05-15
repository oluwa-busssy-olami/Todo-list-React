import React, { useState } from "react";
import FormSection from "./FormSection";
import TodoList from "./TodoList";
import { nanoid } from "nanoid";

//TODO: w need to find a way to bring taht new task into the TodoApp
// we use the callbackFunction to pass to information from the child to parent
//we use that concept of state to modifidy stuff in our component
const TodoApp = () => {
  const initialTasks = JSON.parse(localStorage.getItem("todolist")) || [];
  const [tasks, setTasks] = useState(initialTasks);

  const addNewTask = (task) => {
    // console.log(`In the todoApp: The new task is ${task}`);
    const taskObject = {
      id: nanoid(),
      name: task,
    };
    const updatedTasks = [taskObject, ...tasks];
    setTasks(updatedTasks);
    localStorage.setItem("todolist", JSON.stringify(updatedTasks));
  };
  const deleteTask = (taskID) => {
    console.log(`${taskID} item deleted`);
    //filter out the item whose id is equal to tasks
    const updatedTasks = tasks.filter((item) => {
      return item.id !== taskID;
    });
    console.log(updatedTasks);
    setTasks(updatedTasks);
    localStorage.setItem("todolist", JSON.stringify(updatedTasks));
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginTop: "8px" }}> TODO APP </h2>{" "}
      <FormSection handleClick={addNewTask} />{" "}
      <h3
        style={{
          textAlign: "center",
          borderBottom: "1px solid grey",
          marginTop: "8px",
          padding: "8px",
        }}>
        {" "}
        List of item{" "}
      </h3>{" "}
      {tasks.length > 0 ? (
        <TodoList tasks={tasks} onDeleteClick={deleteTask} />
      ) : (
        <p> No item in the list </p>
      )}{" "}
    </div>
  );
};

export default TodoApp;
