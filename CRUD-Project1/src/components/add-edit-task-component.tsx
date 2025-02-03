import { FC } from "react";
import { AddEditTaskProps, Task } from "../model";

export const AddEditTaskComponent: FC<AddEditTaskProps> = ({
  selectedTask,
  setSelectedTask,
  addEditTask,
}) => {
  const isChecked = () => {
    setSelectedTask({ ...selectedTask, completed: !selectedTask.completed });
  };

  const handleOnChange =
    (field: keyof Task) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSelectedTask({ ...selectedTask, [field]: e.target.value });
    };

  return (
    <>
      <div className="add-container">
        <h3>Add new task</h3>
        <div className="task-title">
          <label>Title</label>
          <input
            className="title-input"
            type="text"
            value={selectedTask.title}
            maxLength={120}
            onChange={handleOnChange("title")}
          />
        </div>

        <div className="task-state">
          <label>Completed</label>
          <input
            className="checkbox"
            type="checkbox"
            checked={selectedTask.completed}
            onChange={isChecked}
          />
        </div>

        <div className="task-description">
          <label>Task description</label>
          <textarea
            className="description-input"
            value={selectedTask.description}
            onChange={handleOnChange("description")}
          />
        </div>

        <div className="task-dates">
          <label>Start</label>
          <input
            type="date"
            value={selectedTask.startDate}
            onChange={handleOnChange("startDate")}
          />
          <label>End</label>
          <input
            type="date"
            value={selectedTask.endDate}
            onChange={handleOnChange("endDate")}
          />
        </div>

        <div className="buttons">
          <button
            disabled={selectedTask.title === ""}
            className={selectedTask.title === "" ? "disabled" : ""}
            onClick={addEditTask}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};
