import { Task } from "../App";

// export interface Task {
//   task_name: string;
//   task_description: string;
// }




interface TaskListProp {
  tasks: Task[];
  onTaskClick: (task:Task)=>void;
}

const TasksCard = ({tasks,onTaskClick}:TaskListProp) => {

  return (
    <>
      <div className="card col-md-6 mb-3" style={{ maxWidth: "100%" }}>
        <div
          className="card-body custom-scrollbar"
          style={{ height: "400px", overflowY: "scroll" }}
        >
          <ul className="list-group">
            {tasks.map((task) => (
              <li
                className="list-group-item"
                onClick={()=>onTaskClick(task)}
                key={task.task_name}
                style={{cursor:'pointer'}}
              >
                {task.task_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TasksCard;
