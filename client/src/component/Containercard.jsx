import React from "react";
import HomeCard from "./Homecard";

export default function MyComponent(props) {
  // Sample array to render HomeCard components
  const array = [1, 2, 3, 4]; // Replace with your actual data

  return (
    <div>
      <strong className="text-black">{props.title}</strong> {/* Ensure black text */}
      <hr />
      <div className="d-flex flex-wrap justify-content-center gap-4 my-4">
        {array.map((item, index) => (
          <HomeCard key={index} className="d-inline-block" />
        ))}
      </div>
    </div>
  );
}

