import { createRoot } from "react-dom/client";
import { Board } from "./app";
import "./mystyles.scss";

const root = createRoot(document.getElementById("root"));

root.render(<Board />);
