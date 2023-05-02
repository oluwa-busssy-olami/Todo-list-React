import React from "react";

//data source
//const tasks = ["Teach React", "Teach JavaScript", "Teach HTML"];

const tasks = [
  {
    id: 1,
    name: "Teach React",
  },
  {
    id: 2,
    name: "Teach JavaScript",
  },
  {
    id: 3,
    name: "Teach HTML",
  },
  {
    id: 4,
    name: "Teach CSS",
  },
  {
    id: 5,
    name: "Teach Python",
  },
];
//This is where the list of task will be listed
const TodoList = () => {
  const renderedTask = tasks.map((task, index) => {
    return (
      <div className="task" key={task.id}>
        <span className="taskName"> {task.name} </span>{" "}
        <div className="btn-group">
          <button className="edit-btn"> Edit </button>{" "}
          <button className="delete-btn"> Delete </button>{" "}
        </div>{" "}
      </div>
    );
  });
  console.log({ renderedTask });
  return (
    // Task
    <div className="tasks"> {renderedTask} </div>
  );
};

export default TodoList;
