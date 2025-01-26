import "./App.scss";
import { useState } from "react";
import tasksData from "./data/tasks.json";
import { Task } from "./model";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>(tasksData.tasks);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <h1>Tasks manager</h1>
      <div className="add-container">
        <label>Add new task</label>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.id}.</span>
            <span className="title">{task.title}</span>
            <span> Completed: {task.completed ? "yes" : "no"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
