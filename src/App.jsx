import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputValues, setInputValues] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };
  const handleClick = (event) => {
    event.preventDefault();
    setInputValues((prev) => [...prev, inputValue]);
    console.log(inputValues);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Midterm 2</h1>
      <div>
        <form action="">
          <input onChange={handleChange} type="text" />
          <button type="" onClick={handleClick}>
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
