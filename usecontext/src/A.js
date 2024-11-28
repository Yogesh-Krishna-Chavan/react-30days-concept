import React, { createContext } from "react";
import B from "./B";

const GreetContext = createContext();

const A = () => {
  const greet = "Hello World!";
  const greet2 = "Hiiieeee World!";

  return (
    <div>
      <GreetContext.Provider value={{ greet, greet2 }}>
        <B />
      </GreetContext.Provider>
    </div>
  );
};

export default A;
export { GreetContext };
