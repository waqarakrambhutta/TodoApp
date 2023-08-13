import { useState } from "react";
import { Task } from "../App";
import { GrAdd } from "react-icons/gr";
import { useForm } from "react-hook-form";

export interface AddTaskFormProp {
  onAddTask: (task: Task) => void;
}

const AddTask = ({ onAddTask }: AddTaskFormProp) => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <div>
      {!showForm ? (
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => setShowForm(true)}
        >
          <GrAdd />
        </button>
      ) : (
        <form>
          <div className="mb-3">
            <label className="form-label">Task Name:</label>
            <input
              className={`form-control ${errors.task_name ? "is-invalid" : ""}`}
              {...register("task_name", { required: true })}
            />
            {errors.task_name && (
              <div className="invalid-feedback">Task name is required</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Task Name:</label>
            <textarea
              className={`form-control ${
                errors.task_description ? "is-invalid" : ""
              }`}
              {...register("task_description", { required: true })}
            />
            {errors.task_name && (
              <div className="invalid-feedback">Task name is required</div>
            )}
          </div>
          <button type="submit" className="btn btn-success me-2">
            Add Task
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              setShowForm(false);
              reset();
            }}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default AddTask;
