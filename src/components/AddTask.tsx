import { useState } from "react";
import { Task } from "../App";
import { useForm } from "react-hook-form";
import axios from "axios";

export interface AddTaskFormProp {
  onAddTask: (task: Task) => void;
}

const AddTask = ({ onAddTask }: AddTaskFormProp) => {
  const [showForm, setShowForm] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/task/', data); 
      if (response.status === 201) {
        onAddTask(data);
        reset();
        setShowForm(false); 
      } else {
        throw new Error('Failed to add task. Please try again.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-task-form">
      {!showForm ? (
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
        >
          Add Task
        </button>
      ) : (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Add Task</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">Task Name:</label>
                <input
                  className={`form-control ${errors.task_name ? 'is-invalid' : ''}`}
                  {...register('task_name', { required: true })}
                />
                {errors.task_name && (
                  <div className="invalid-feedback">Task name is required.</div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Task Description:</label>
                <textarea
                  className={`form-control ${errors.task_description ? 'is-invalid' : ''}`}
                  {...register('task_description', { required: true })}
                />
                {errors.task_description && (
                  <div className="invalid-feedback">Task description is required.</div>
                )}
              </div>
              <button type="submit" className="btn btn-outline-dark me-2">Add Task</button>
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={() => {
                  setShowForm(false);
                  reset();
                }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTask;
