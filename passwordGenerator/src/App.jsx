import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setLength]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, generatePassword]);
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-900">
      <h1 className="text-orange-500 text-4xl mb-20">Password Generator</h1>
      <div className="flex flex-row bg-gray-700 h-10 rounded-full">
        <input
          type="text"
          placeholder="Password"
          value={password}
          className="outline-none w-72 bg-gray-500 border rounded-l-xl px-2 border-gray-800"
          ref={passwordRef}
          readOnly
        />
        <button
          className="px-2 bg-blue-500 border border-l-0 rounded-r-xl border-gray-800"
          onClick={copyToClipboard}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-copy"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        </button>
      </div>
      <div className="flex flex-row gap-8 border-gray-700 text-white mt-6">
        <input
          type="range"
          name="length"
          value={length}
          min={8}
          max={32}
          className="cursor-pointer"
          id="length"
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label htmlFor="length">Length ({length})</label>
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
        />
        <label>Numbers</label>
        <input
          type="checkbox"
          defaultChecked={characterAllowed}
          onChange={() => {
            setCharacterAllowed((prev) => !prev);
          }}
        />
        <label>Characters</label>
      </div>
    </div>
  );
};

export default App;
