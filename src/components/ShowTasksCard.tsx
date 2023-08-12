const ShowTasksCard = () => {
  const onetask = {
    task_name: "Bhangra",
    task_description: "I will learn bhangra, and perform it in the QAU",
  };

  return (
    <div className="card col-md-6 mb-3" style={{ maxWidth: "100%" }}>
      <div
        className="card-body custom-scrollbar"
        style={{ height: "400px", overflowY: "scroll" }}
      >
        <h4>{onetask.task_name}</h4>
        <p>{onetask.task_description}</p>
      </div>
    </div>
  );
};

export default ShowTasksCard;
