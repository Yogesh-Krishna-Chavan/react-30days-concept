import React, { useState } from "react";
import NewComponent from "./NewComponent";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>

      <br />
      <br />

      <input type="text" value={input} onChange={handleInput} />

      <hr />

      <NewComponent newCount={count} />
    </div>
  );
};

export default Memo;
