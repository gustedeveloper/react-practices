import { FC } from "react";
import { TaskListProps } from "../model";
import { useNavigate } from "react-router-dom";

export const TaskList: FC<TaskListProps> = ({
  tasks,
  deleteTask,
  prepareToEdit,
  handleCheckbox,
}) => {
  const navigate = useNavigate();

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

          <div className="task-state">
            <label>Completed</label>
            <input
              className="checkbox"
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckbox(task.id)}
            />
          </div>

          <div className="description-container">
            <p className="description">{task.description}</p>
          </div>

          <div className="dates">
            <span> {task.startDate ? `Start: ${task.startDate}` : ""}</span>
            <span>{task.endDate ? `End: ${task.endDate}` : ""}</span>
          </div>

          <div className="buttons">
            <button onClick={() => prepareToEdit(task)} className="modify">
              Modify
            </button>
            <button onClick={() => deleteTask(task.id)} className="delete">
              Delete
            </button>
            <button
              onClick={() => navigate(`/task-detail/${task.id}`)}
              className="detail"
            >
              View detail
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
