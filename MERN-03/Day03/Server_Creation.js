//importing http module
const http = require("http");

//create a server
const server = http.createServer((request, response) => {
  // console.log('Request received for URL:',  request.url);
  //   console.log(`method:= ${request.method}`);

  if (request.method === "GET") {
    if (request.url === "/product") {
      console.log("select * from product");
    } else if (request.url === "/category") {
      console.log("select * from category");
    }
  }
  if (request.method === "POST") {
    if (request.url === "/product") {
      console.log("insert into product");
    } else if (request.url === "/category") {
      console.log("insert into category");
    }
  }

  response.end("Welcome Yogesh");
});

//Start the server
server.listen(3000, "0.0.0.0", () => {
  console.log("server started on port 3000");
});
