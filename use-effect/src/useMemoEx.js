import React, { useState, useMemo } from "react";

const useMemoEx = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  function handleInput(e) {
    setInput(e.target.value);
  }

  const result = useMemo(function slowFunction() {
    let sum = 0;

    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }
    console.log("slow function called");
    return sum;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>

      <br />
      <br />
      <hr />

      <input type="text" value={input} onChange={handleInput} />

      <h1>input:{input}</h1>

      <hr />

      {result}
    </div>
  );
};

export default useMemoEx;
