require("dotenv").config(); // it is the environment file which determines the port from which files are listened
const express = require("express"); //imports all of the dependencies available in the express package
const app = express(); //stores the function in the variable to use whenever required
const port = 3000; // defining a port number of our choice .

// using app variable to initialize a get request to the server
app.get("/", (req, res) => {
  //listen from the home route(/) .
  res.send("Hello World!"); // return a response the request via res keyword
});

app.get("/instagram", (req, res) => {
  res.send("ziya_nissar");
});

app.get("/login", (req, res) => {
  res.send("This is the log");
});

// app is used to make it listen on the port
app.listen(process.env.port``, () => {
  console.log(`Example app listening on port ${port}`);
});
