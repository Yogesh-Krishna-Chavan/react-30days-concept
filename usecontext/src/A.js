import React from "react";
import B from "./B";

const A = () => {
  const greet = "Hello World!";

  return (
    <div>
      <B greet={greet} />
    </div>
  );
};

export default A;
