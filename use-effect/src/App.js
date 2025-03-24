import React, { useEffect, useState } from "react";

const App = () => {
  const [clicked, setClicked] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("We are using useState");
  }, [count]);

  return (
    <div>
      <button onClick={() => setClicked("Submit")}>Submit</button>
      <hr />
      <button onClick={() => setClicked("This")}>This</button>
      <hr />
      <button onClick={() => setClicked("Button")}>Button</button>
      <h1>{clicked}</h1>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <h1>{count}</h1>
    </div>
  );
};

export default App;
