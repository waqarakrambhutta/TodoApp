import axios from "axios";
import { useEffect, useState } from "react";

interface Task {
  task_name: string;
  task_description: string;
}


const TasksCard = () => {
  
  const [task,setTask] = useState<Task[]>([])
  const [error,setError] = useState('')


  useEffect(()=>{
    axios
    .get<Task[]>('http://127.0.0.1:8000/task/')
    .then(response=>setTask(response.data))
    .catch(err=>setError(err))

  })
  return (
    <>
    {error && <p className="text-danger">{error}</p>}
    <div
      className="card col-md-6"
      style={{ maxWidth: "100%", margin: "0px 10px 0px 10px" }}
    >
      <div
        className="card-body custom-scrollbar"
        style={{ maxHeight: "400px", overflowY: "scroll" }}
      >
        <ul className="list-group" >
          {task.map((e) => (
            <li className="list-group-item" key={e.task_name}>{e.task_name}</li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default TasksCard;
