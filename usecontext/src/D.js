import React, { useContext } from "react";
import { GreetContext } from "./A";

const D = (props) => {
  const useCon = useContext(GreetContext);
  return (
    <h1>
      {" "}
      Greet : {useCon.greet} {useCon.greet2}
    </h1>
  );
};

export default D;
