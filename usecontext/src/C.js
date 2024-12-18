import React from "react";
import D from "./D";

const C = (props) => {
  return (
    <div>
      <h1>
        <D greet={props.greet} />
      </h1>
    </div>
  );
};

export default C;
