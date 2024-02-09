import React from "react";

const NewComponent = (props) => {
  console.log("New comp render");

  return (
    <div>
      <h1>New Component: {props.newCount}</h1>
    </div>
  );
};

// export default React.memo(NewComponent);
export default NewComponent;
