import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  console.log(count);
  console.log(setCount);
  console.log(useState("Hello"));

  const handleClickPlus = () => {
    setCount(count + 1);
  };

  const handleClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClickPlus}>+</button>
      <br />
      <br />
      <button onClick={handleClickMinus}>-</button>
    </div>
  );
};

export default App;
