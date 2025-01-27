import { FC } from "react";
import { TaskListProps } from "../model";
import { useNavigate } from "react-router-dom";

export const TaskList: FC<TaskListProps> = ({ tasks, deleteTask }) => {
  const navigate = useNavigate();
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span className="title">{task.title}</span>
          <span> Completed: {task.completed ? "yes" : "no"}</span>
          <button
            onClick={() => navigate(`/modify-task-page/${task.id}`)}
            className="modify"
          >
            Modify
          </button>
          <button onClick={() => deleteTask(task.id)} className="delete">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
