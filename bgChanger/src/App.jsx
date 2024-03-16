import React from "react";
import { useState } from "react";

const buttons = [
  {
    color: "red",
    label: "Red",
  },
  {
    color: "green",
    label: "Green",
  },
  {
    color: "blue",
    label: "Blue",
  },
  {
    color: "yellow",
    label: "Yellow",
  },
  {
    color: "purple",
    label: "Purple",
  },
  {
    color: "pink",
    label: "Pink",
  },
  {
    color: "black",
    label: "Black",
  },
  {
    color: "gray",
    label: "Gray",
  },
];

const App = () => {
  const [color, setColor] = useState("blue");
  return (
    <div
      className={`h-screen w-full bg-${color}-500 flex flex-col align-center justify-end items-center`}
    >
      <div className="bg-white h-30 w-auto mb-10 rounded-full gap-10 flex flex-row px-8 shadow-black shadow-md py-2">
        <button
          className={`h-20 w-20 rounded-full bg-red-500 `}
          onClick={() => {
            setColor("red");
          }}
        >
          Red
        </button>
        <button
          className={`h-20 w-20 rounded-full bg-blue-500`}
          onClick={() => {
            setColor("blue");
          }}
        >
          Blue
        </button>
        <button
          className={`h-20 w-20 rounded-full bg-green-500`}
          onClick={() => {
            setColor("green");
          }}
        >
          Green
        </button>
        <button
          className={`h-20 w-20 rounded-full bg-gray-500`}
          onClick={() => {
            setColor("gray");
          }}
        >
          Gray
        </button>
        <button
          className={`h-20 w-20 rounded-full bg-yellow-500`}
          onClick={() => {
            setColor("yellow");
          }}
        >
          Yellow
        </button>
        <button
          className={`h-20 w-20 rounded-full bg-pink-500`}
          onClick={() => {
            setColor("pink");
          }}
        >
          Pink
        </button>
        <button
          className={`h-20 w-20 rounded-full bg-purple-500`}
          onClick={() => {
            setColor("purple");
          }}
        >
          Purple
        </button>
      </div>
    </div>
  );
};

export default App;
