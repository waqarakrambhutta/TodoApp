import { Task } from "../App";

interface outputSectionProp{
  selectedTask: Task |null;
}

const ShowTasksCard = ({selectedTask}:outputSectionProp) => {

    // const onetask = 
    //     {task_name:'Bhangra',task_description:'I will learn bhangra, and perform it in the QAU'}


  return (
    <div
      className="card col-md-6 mb-3"
      style={{ maxWidth: "100%", margin: "0px 10px 0px 0px" }}
    >
      <div
        className="card-body custom-scrollbar"
        style={{height: "400px", overflowY: "scroll" }}
      >
        {selectedTask ?  (<div>
          <h4>{selectedTask.task_name}</h4>
          <p>{selectedTask.task_description}</p>
        </div>  )      
      : (
        <p>Select the task.</p>
      )}
        
      </div>
    </div>
  )
}

export default ShowTasksCard