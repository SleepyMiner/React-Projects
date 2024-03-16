import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Simple Counter</h1>
        <div className="buttons">
          <button
            className="increment"
            onClick={() => {
              increment();
            }}
          >
            +
          </button>
          <button
            className="decrement"
            onClick={() => {
              decrement();
            }}
          >
            -
          </button>
        </div>
        <h2 className="display">{count} </h2>
      </div>
    </>
  );
}

export default App;
