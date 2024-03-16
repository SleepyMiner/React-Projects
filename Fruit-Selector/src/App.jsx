import React from "react";
import { useState } from "react";

const fruits = [
  {
    id: 1,
    name: "Apple",
    path: "https://i.redd.it/bxcbiiu1wxa71.png",
    color: "red",
  },
  {
    id: 2,
    name: "Banana",
    path: "https://cdn.pixabay.com/photo/2017/10/14/15/50/banana-2850841_1280.png",
    color: "yellow",
  },
  {
    id: 3,
    name: "Cherry",
    path: "https://cdn.pixabay.com/photo/2014/12/21/23/34/cherry-575547_960_720.png",
    color: "pink",
  },
  {
    id: 4,
    name: "Grape",
    path: "https://cdn.pixabay.com/photo/2016/04/01/11/31/blue-1300387_960_720.png",
    color: "purple",
  },
];
function App() {
  const [fruit, setFruit] = useState(fruits[0]);
  const [sauce, setSauce] = useState(null);

  return (
    <>
      <div
        className={`flex flex-col h-screen w-full bg-indigo-300 justify-center items-center`}
      >
        <h1 className="text-center text-5xl">Fruits basket</h1>
        <div className="flex flex-row gap-10 items-center justify-center">
          {fruits.map((fruit, index) => (
            <button
              key={index}
              onClick={() => {
                setFruit(fruit.name);
                setSauce(fruit.path);
              }}
            >
              <img src={fruit.path} alt={fruit.name} width={150} />
            </button>
          ))}
        </div>
        <div className="mb-10 flex flex-col justify-center items-center">
          <h1 className="text-3xl">You have selected</h1>
          {sauce ? <img src={sauce} alt={fruit} width={150} /> : <></>}
        </div>
      </div>
    </>
  );
}

export default App;
