"use client";
import React, { useState } from "react";

interface FormProps {
  addTask: (newTask: string) => void;
}

const Form: React.FC<FormProps> = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        placeholder="Enter a task..."
        onChange={(e) => setTask(e.target.value)}
        className="px-3 border-2 py-2 text-black outline-none shadow-sm hover:shadow-md border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="ml-2 rounded-lg border-2 shadow-sm hover:shadow-md py-2 px-3"
      >
        +
      </button>
    </form>
  );
};

export default Form;
