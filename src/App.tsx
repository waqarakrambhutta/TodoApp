import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ShowTasksCard from "./components/ShowTasksCard";
import TasksCard from "./components/TasksCard";
import axios from "axios";


export interface Task{
  id:number;
  task_name:string;
  task_description:string;
}

function App() {
  // const tasks = [
  //   {task_name:'Todo List',task_description:'I shell create first project of todo list'},
  //   {task_name:'Chat App',task_description:'I shell create secont project of chat app'},
  //   {task_name:'E-commerce app',task_description:'I shell create third project of ecommerce app'}
  // ]

  const [tasks, setTasks] = useState<Task[]>([])
  const [selectedTask, setSelectedTask] = useState<Task|null>(null)
    const [error,setError] = useState('')


    useEffect(()=>{
    axios
    .get<Task[]>('http://127.0.0.1:8000/task/')
    .then(response=>setTasks(response.data))
    .catch(err=>setError(err))

  },[tasks])

  const handleTaskClick = (task:Task) =>{
    setSelectedTask(task);
  }

  return (
    <>
    {error && <p className="text-danger">{error}</p>}
      <NavBar />
      <div
        className="container-fluid d-flex justify-content-between align-items-center gap-2 col-md-12 col-lg-12 col-sm-12"
        style={{ width: "100%" }}
      >
        <TasksCard tasks={tasks} onTaskClick={handleTaskClick} />
        <ShowTasksCard selectedTask={selectedTask} />
      </div>
    </>
  );
}

export default App;
