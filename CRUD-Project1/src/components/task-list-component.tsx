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
        <li key={task.id}>
          <span className="title">{task.title}</span>
          <span> Completed: {task.completed ? "yes" : "no"}</span>
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
