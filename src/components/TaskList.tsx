import { useEffect, useState } from "react"
import axios from "axios"

export interface Task{
  task_name:string,
  task_description:string
}




const TaskList = () => {
  const [task,setTask] = useState<Task[]>([])
  const [error,setError] = useState('')


  useEffect(()=>{
    axios
    .get<Task[]>('http://127.0.0.1:8000/task/')
    .then(response=>setTask(response.data))
    .catch(err=>setError(err))
  })

  return (

    {error && <p className="text-danger">{error}</p>}
    <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">Task Name</th>
        <th scope="col">Description</th>
      </tr>
      <tbody>
        {task.map((e,index)=>
        <tr key={index}>
          <td>{e.task_name}</td>
          <td>{e.task_description}</td>
        </tr>
        )}
      </tbody>
    </thead>
    </table>
    </>
  )
}

export default TaskList