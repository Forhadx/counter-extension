import React from "react";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let localVal = localStorage.getItem("val");
    if (localVal !== null) {
      setValue(+localVal);
    }
  }, []);

  const negtiveHandler = () => {
    setValue(value - 1);
    localStorage.setItem("val", value - 1);
  };

  const positiveHandler = () => {
    setValue(value + 1);
    localStorage.setItem("val", value + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Count: <span>{value}</span>
        </h1>
        <div>
          <button className="m-btn" onClick={negtiveHandler}>
            -
          </button>
          <button onClick={positiveHandler}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
