import React from "react";

const Book = (props) => {
  const { image, title, publisher, price } = props; //array destructoring
  console.log(props);

  return (
    <div>
      <img src={image} />
      <h3>{title}</h3>
      <p>{publisher}</p>
      <p>${price}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default Book;
