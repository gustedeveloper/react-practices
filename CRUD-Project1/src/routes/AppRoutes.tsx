import React from "react";
import { Routes, Route } from "react-router-dom";
import { App } from "../App";
import { ModifyTaskPage } from "../components/modify-task-page";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/modify-task-page/:id" element={<ModifyTaskPage />} />
    </Routes>
  );
};
