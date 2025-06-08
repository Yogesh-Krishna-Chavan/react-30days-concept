const express = require("express");

//Collection of products data
const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

const categories = [];

const app = express();

//routes collection
app.get("/products", (req, res) => {
  console.log(`GET /products`);
  res.send(products);
});

//POST method with Query string
app.post("/products", (req, res) => {
  console.log(req.query);

  const { name, price } = req.query;
  console.log(`Query string parameter: name = ${name}, price = ${price}`);

  products.push({ id: products.length + 1, name, price });
  res.send();
});

//POST method with URL params
app.post("/category/:title/:discription", (req, res) => {
  console.log(req.params);

  const { title, discription } = req.params;
  categories.push({ id: categories.length + 1, title, discription });

  res.send();
});

app.get("/category", (req, res) => {
  res.send(categories);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is running on http://localhost:3000");
});
