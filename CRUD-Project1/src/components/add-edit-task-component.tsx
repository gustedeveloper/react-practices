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
        <label>Add new task</label>
        <input
          type="text"
          value={selectedTask.title}
          maxLength={120}
          onChange={(e) =>
            setSelectedTask({ ...selectedTask, title: e.target.value })
          }
        />
        <div className="task-state">
          <label>Completed</label>
          <input
            className="checkbox"
            type="checkbox"
            checked={selectedTask.completed}
            onChange={isChecked}
          />
        </div>
        <div className="buttons">
          <button onClick={addEditTask}>Add</button>
        </div>
      </div>
    </>
  );
};
