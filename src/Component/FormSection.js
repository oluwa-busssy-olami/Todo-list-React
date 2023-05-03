import React, { useState } from "react";

const FormSection = () => {
  const [newTask, setNewTask] = useState();
  const handleChange = () => {};
  return (
    <div className="newtask">
      <input
        type="text"
        placeholder="Add a task"
        value={newTask}
        onChange={handleChange}
      />{" "}
      <button className="push"> Add </button>{" "}
    </div>
  );
};

export default FormSection;
