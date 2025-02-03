import React from "react";
import { Routes, Route } from "react-router-dom";
import { App } from "../App";
import { TaskDetail } from "../components/task-detail.component";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/task-detail/:id" element={<TaskDetail />} />
    </Routes>
  );
};
