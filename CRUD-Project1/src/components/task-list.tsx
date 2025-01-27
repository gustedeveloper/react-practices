import { FC } from "react";
import { TaskListProps } from "../model";

export const TaskList: FC<TaskListProps> = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span className="title">{task.title}</span>
          <span> Completed: {task.completed ? "yes" : "no"}</span>
          <button className="modify">Modify</button>
          <button onClick={() => deleteTask(task.id)} className="delete">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
