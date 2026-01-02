import React, { useState } from "react";

const App = () => {
  const arr = ["sarthak", "Tripti", "Tanya", "Sambhavi", "Vijay", "axios"];
  const colors = ["lightblue", "lightgreen", "lightcoral", "lightgoldenrodyellow"];
  const [num, setnum] = useState(0);
  const [Change, setChange] = useState(0);

  return (
    <div style={{backgroundColor:colors[Change],height:'100vh',padding:'20px'}}>
      <h1>{num}</h1>
      <button
        onClick={() => {
          setnum(num + 1);
        }}
      >
        incr
      </button>
      <button
        onClick={() => {
          setnum(num - 1);
        }}
      >
        decr
      </button>

      <button
        onClick={() => {
          setnum(num + 5);
        }}
      >
        jump into 5
      </button>

      <h2>{arr[Change]}</h2>
      <button
        onClick={() => {
          
            setChange((prev) => (prev +1) % arr.length);
          
        }}
      >
        Change User
      </button>
    </div>
  );
};

export default App;
