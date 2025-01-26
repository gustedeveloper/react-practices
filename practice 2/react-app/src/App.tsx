import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/login";
import { ListPage } from "./components/list";
import { DetailPage } from "./components/detail";

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </>
  );
};

/*
Router
      Routes
                Route
                Route
                ...
      Routes
Router
*/
