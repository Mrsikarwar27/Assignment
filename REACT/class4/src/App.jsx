import React from "react";
import { useState } from "react";

const App = () => {
  const [marks, setMarks] = useState([60, 29, 12, 70, 55, 30]);

  return (
    <div>
      {marks.map((elem, idx) => {
        return (
          <h1 key={idx}>
            Student {idx + 1} = {elem} {elem >= 33 ? "(pass)" : "(fail)"}
          </h1>
        );
      })}
      <button
        onClick={() => {
          const newarr = marks.map((elem) => {
            return elem + 5;
          });
          setMarks(newarr);
        }}
      >
        Grace give them
      </button>
    </div>
  );
};

export default App;
