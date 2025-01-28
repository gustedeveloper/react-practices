import { FC } from "react";
import { AddEditTaskProp } from "../model";

export const AddEditTaskComponent: FC<AddEditTaskProp> = ({
  inputValue,
  setInputValue,
  addNewTask,
}) => {
  return (
    <>
      <div className="add-container">
        <label>Add new task</label>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addNewTask}>Add</button>
      </div>
    </>
  );
};
