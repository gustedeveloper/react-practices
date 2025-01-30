import { FC } from "react";
import { AddEditTaskProp } from "../model";

export const AddEditTaskComponent: FC<AddEditTaskProp> = ({
  inputValue,
  setInputValue,
  addNewTask,
  editTask,
  checkboxValue,
  setCheckboxValue,
}) => {
  const isChecked = () => {
    setCheckboxValue(!checkboxValue);
  };

  return (
    <>
      <div className="add-container">
        <label>Add new task</label>
        <input
          type="text"
          value={inputValue}
          maxLength={120}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="task-state">
          <label>Completed</label>
          <input
            className="checkbox"
            type="checkbox"
            checked={checkboxValue}
            onChange={isChecked}
          />
        </div>
        <div className="buttons">
          <button onClick={addNewTask}>Add</button>
          <button onClick={editTask}>Edit</button>
        </div>
      </div>
    </>
  );
};
