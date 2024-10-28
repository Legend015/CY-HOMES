import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbr from "./component/Navbr.jsx";
import Searchbr from "./component/Searchbr.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbr></Navbr>
    <Searchbr></Searchbr>
  </StrictMode>
);
