import "./App.scss";
import { useState } from "react";
import tasksData from "./data/tasks.json";
import { Task } from "./model";
import { v4 as uuidv4 } from "uuid";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>(tasksData.tasks);
  const [inputValue, setInputValue] = useState("");

  const addNewTask = () => {
    if (inputValue.trim() !== "") {
      const newTask: Task = {
        id: uuidv4(),
        title: inputValue,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    } else {
      alert("Enter new task!");
    }
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Tasks manager</h1>
      <div className="add-container">
        <label>Add new task</label>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addNewTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.id}.</span>
            <span className="title">{task.title}</span>
            <span> Completed: {task.completed ? "yes" : "no"}</span>
            <button className="modify">Modify</button>
            <button onClick={() => deleteTask(task.id)} className="delete">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
