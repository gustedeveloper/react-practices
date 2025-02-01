import "./App.scss";
import { useState } from "react";
import tasksData from "./data/tasks.json";
import { Task } from "./model";
import { v4 as uuidv4 } from "uuid";
import { TaskList } from "./components/task-list-component";
import { AddEditTaskComponent } from "./components/add-edit-task-component";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>(tasksData.tasks);
  const [selectedTask, setSelectedTask] = useState<Task>({
    id: "",
    title: "",
    completed: false,
  });

  const addEditTask = () => {
    console.log("hey");
    if (selectedTask.id === "") {
      const newTask: Task = {
        id: uuidv4(),
        title: selectedTask.title,
        completed: selectedTask.completed,
      };

      setTasks([...tasks, newTask]);
    } else {
      const updatedTasks = tasks.map((task) =>
        task.id === selectedTask.id
          ? {
              ...task,
              title: selectedTask.title,
              completed: selectedTask.completed,
            }
          : task
      );
      setTasks(updatedTasks);
    }
    setSelectedTask({
      id: "",
      title: "",
      completed: false,
    });
  };

  const prepareToEdit = (task: Task) => {
    setSelectedTask({
      ...task,
      title: task.title,
      completed: task.completed,
    });
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
          addEditTask={addEditTask}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
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
