interface Task {
  task_name: string;
  task_description: string;
}

interface Prop {
  task: Task[];
}

const TasksCard = ({ task }: Prop) => {
  return (
    <div
      className="card col-md-6"
      style={{ maxWidth: "100%", margin: "0px 10px 0px 10px" }}
    >
      <div
        className="card-body custom-scrollbar"
        style={{ maxHeight: "400px", overflowY: "scroll" }}
      >
        <ul className="list-group">
          {task.map((task) => (
            <li className="list-group-item">{task.task_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TasksCard;
