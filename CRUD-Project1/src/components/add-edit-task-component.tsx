import { FC } from "react";
import { AddEditTaskProp } from "../model";

export const AddEditTaskComponent: FC<AddEditTaskProp> = ({
  inputValue,
  setInputValue,
  addNewTask,
  editTask,
}) => {
  return (
    <>
      <div className="add-container">
        <label>Add new task</label>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="buttons">
          <button onClick={addNewTask}>Add</button>
          <button onClick={editTask}>Edit</button>
        </div>
      </div>
    </>
  );
};
