
export interface Task{
  task_name:string,
  task_description:string
}

interface Props{
  task:Task[]
}


const TaskList = ({task}:Props) => {

  return (
    <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">Task Name</th>
        <th scope="col">Description</th>
      </tr>
      <tbody>
        {task.map((tasks,index)=>
        <tr key={index}>
          <td>{tasks.task_name}</td>
          <td>{tasks.task_description}</td>
        </tr>
        )}
      </tbody>
    </thead>
    </table>
  )
}

export default TaskList