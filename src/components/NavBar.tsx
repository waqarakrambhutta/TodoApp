import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import AddTask from "./AddTask";
import { useState } from "react";
import { Task } from "../App";

const NavBar = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (task: Task) => {
    setTasks([...tasks, task]); 
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
        <div
          className="container-fluid d-flex justify-content-between align-items-center"
          style={{ width: "100%" }}
        >
          <h2>Todo List</h2>
          <div className="d-flex gap-2">
            {/* <button type="button" className="btn btn-outline-dark">
              <GrAdd />
            </button> */}
            <AddTask onAddTask={handleAddTask}/>
            <button type="button" className="btn btn-outline-dark">
              <GrUpdate />
            </button>
            <button type="button" className="btn btn-outline-dark">
              <MdDelete />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
