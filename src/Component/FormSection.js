import React, { useState } from "react";

const FormSection = (props) => {
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    //console.log(event)
    const taskName = event.target.value;
    setNewTask(taskName);
  };
  const handleClick = () => {
    console.log(`The new task ${newTask}`);
    props.handleClick(newTask);
    setNewTask("");
    //what this above dos is that it update the new task to empty string
  };
  return (
    <div className="newtask">
      <input
        type="text"
        placeholder="Add a task"
        value={newTask}
        //the handleChange is like a reference
        onChange={handleChange}
      />{" "}
      <button className="push" onClick={handleClick}>
        {" "}
        Add{" "}
      </button>{" "}
    </div>
  );
};

export default FormSection;
