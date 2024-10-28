import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbr from "./component/Navbr.jsx";
import Searchbr from "./component/Searchbr.jsx";
import HomeCard from "./component/Homecard.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbr></Navbr>
    <Searchbr></Searchbr>
    <div className="d-flex justify-content-center gap-4 my-4">
      <HomeCard></HomeCard>
      <HomeCard></HomeCard>
    </div>
  </StrictMode>
);
