import { FC } from "react";
import { TaskListProps } from "../model";

export const TaskList: FC<TaskListProps> = ({
  tasks,
  deleteTask,
  prepareToEdit,
}) => {
  return (
    <ul className="tasks-container">
      {tasks.map((task) => (
        <li
          className={
            tasks.indexOf(task) === tasks.length - 1 ? "last-task" : "task"
          }
          key={task.id}
        >
          <span className="title">{task.title}</span>
          <span>
            Completed <input type="checkbox" />
          </span>
          <div className="buttons">
            <button onClick={() => prepareToEdit(task)} className="modify">
              Modify
            </button>
            <button onClick={() => deleteTask(task.id)} className="delete">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
