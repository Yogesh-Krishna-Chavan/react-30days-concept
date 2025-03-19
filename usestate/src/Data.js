import React, { useState } from "react";
import data from "./data.json";

const Data = () => {
  const [nData, setnData] = useState(data);

  const handleClick = () => {
    setnData([]);
  };

  const handleRemove = (itemId) => {
    setnData(nData.filter((item) => item.id !== itemId));
  };

  const handleUpdate = (itemId) => {
    setnData(
      nData.map((item) => {
        if (item.id === itemId) {
          return { name: "new name" };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div>
      <ul>
        {nData.map((item) => (
          <li key={item.id}>
            {item.name}
            <br />
            <button onClick={() => handleRemove(item.id)}>Remove</button>
            <button onClick={() => handleUpdate(item.id)}>Update</button>
          </li>
        ))}
      </ul>

      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Data;
