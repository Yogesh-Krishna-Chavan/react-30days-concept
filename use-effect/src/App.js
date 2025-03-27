import React, { useEffect, useState } from "react";

//useState and useEffect code

const App = () => {
  const [clicked, setClicked] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("We are using useState");
    return () => {
      console.log("Return of use state");
    };
  }, [count, clicked]);

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
