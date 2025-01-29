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
  const [selectedTask, setSelectedTask] = useState<Task>({
    id: "",
    title: "",
    completed: false,
  });

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

  const prepareToEdit = (task: Task) => {
    setSelectedTask(task);
    setInputValue(task.title);
  };

  const editTask = () => {
    const newTitle = inputValue;
    selectedTask.title = newTitle;
    setInputValue("");
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCheckbox = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <h1>Tasks manager</h1>
      <div className="main-container">
        <AddEditTaskComponent
          inputValue={inputValue}
          setInputValue={setInputValue}
          addNewTask={addNewTask}
          editTask={editTask}
        />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          prepareToEdit={prepareToEdit}
          handleCheckbox={handleCheckbox}
        />
      </div>
    </>
  );
};
