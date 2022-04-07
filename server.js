const express = require("express");
const server = express();

const middleware1 = (req, res, next) => {
    console.log("im middleware 1");
    next();
  

}
const middleware2 = (req, res, next) => {
    console.log("im middlewaree 2");
    next();

}

server.get("/", middleware1, (request, response) => {
    response.send("hello world")
});

server.get("/manthan",middleware2,(req, res) => {
    res.send("manthan")
})

server.listen(7002, () => {
    console.log("server is running at port")
});


