import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbr from "./Navbr.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbr></Navbr>
  </StrictMode>
);
