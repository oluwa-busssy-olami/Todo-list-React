import React from "react";

//data source
//const tasks = ["Teach React", "Teach JavaScript", "Teach  HTML"];
//whn you want to pass datafrom the parent component to the child component, use data props
//when a child component want to carry out an action in the parent component; you use call back function props
//This is where the list of task will be listed
const TodoList = (props) => {
  const renderedTask = props.tasks.map((task, index) => {
    return (
      <div className="task" key={task.id}>
        <span className="taskName"> {task.name} </span>{" "}
        <div className="btn-group">
          <button className="edit-btn"> Edit </button>{" "}
          {/* the arrow function below prevent the onDeleteClick from executing */}{" "}
          {/* task.id is then pass in as a parameter/argument */}{" "}
          {/* the task.id it takes it to the parentComponent (deleteTask ) and passes it in there */}{" "}
          <button
            className="delete-btn"
            onClick={() => props.onDeleteClick(task.id)}>
            {" "}
            Delete{" "}
          </button>{" "}
          {/* the ondeleteClick is not a function but a reference to the function */}{" "}
          {/* The props */}{" "}
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
