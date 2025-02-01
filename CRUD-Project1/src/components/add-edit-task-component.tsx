import { FC } from "react";
import { AddEditTaskProps } from "../model";

export const AddEditTaskComponent: FC<AddEditTaskProps> = ({
  selectedTask,
  setSelectedTask,
  addEditTask,
}) => {
  const isChecked = () => {
    setSelectedTask({ ...selectedTask, completed: !selectedTask.completed });
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
            onChange={(e) =>
              setSelectedTask({ ...selectedTask, title: e.target.value })
            }
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
            onChange={(e) =>
              setSelectedTask({ ...selectedTask, description: e.target.value })
            }
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
