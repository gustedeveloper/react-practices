import { FC, useEffect, useState } from "react";
import tasksData from "../data/tasks.json";
import { createDefaultTaskDetail, Task } from "../model";
import { useParams } from "react-router-dom";

export const TaskDetail: FC = () => {
  const { id } = useParams();
  const [task, setTask] = useState<Task>(createDefaultTaskDetail());

  useEffect(() => {
    const foundTask = tasksData.tasks.find((task) => task.id === id);
    setTask(foundTask || createDefaultTaskDetail());
  }, [id]);

  return (
    <>
      <h1>Task detail</h1>
      <h2 style={{ color: "white" }}>Title</h2>
      <p style={{ color: "white" }}>{task?.title}</p>
    </>
  );
};
