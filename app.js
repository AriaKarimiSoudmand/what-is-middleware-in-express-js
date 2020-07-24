const http = require("http");
// express exports a function at the end!
const express = require("express");
// store express function in a variable called app
const app = express();

// this is a middleware
app.use((req, res, next) => {
  console.log("In the middleware!");
  // this will allow the request to travel on to the next middleware
  next()
});
// another middleware
app.use((req, res, next) => {
  console.log("In another middleware!");
  res.send('<h1>Hello from express!</h1>')
});

const server = http.createServer(app);
server.listen(3000);
