import { createRoot } from "react-dom/client";
import { MainComponent } from "./app";
import "./mystyles.scss";

const root = createRoot(document.getElementById("root"));

root.render(<MainComponent />);
