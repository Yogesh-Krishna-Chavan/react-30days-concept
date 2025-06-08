//import express
const express = require("express");

// create an express app
const app = express();

//route to handle GET requests
app.get("/", (request, response) => {
  //send a response
  console.log("GET method hit");

  response.send("GET method hitted");
});

//route to handle POST requests
app.post("/", (request, response) => {
  //send a response
  console.log("POST method hit");

  response.send("POST method hitted");
});

//route to handle PUT requests
app.put("/", (request, response) => {
  //send a response
  console.log("PUT method hit");

  response.send("PUT method hitted");
});

//route to handle DELETE requests
app.delete("/", (request, response) => {
  //send a response
  console.log("DELETE method hit");

  response.send("DELETE method hitted");
});

//run the app on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
