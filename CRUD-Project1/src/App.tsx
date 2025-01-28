import "./App.scss";
import { useState } from "react";
import tasksData from "./data/tasks.json";
import { Task } from "./model";
import { v4 as uuidv4 } from "uuid";
import { TaskList } from "./components/task-list-component";
import { AddEditTaskComponent } from "./components/add-edit-task-component";

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
      <AddEditTaskComponent
        inputValue={inputValue}
        setInputValue={setInputValue}
        addNewTask={addNewTask}
      />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};
