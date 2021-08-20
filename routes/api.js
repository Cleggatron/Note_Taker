//Routing for our API requests//
const api = require("express").Router();


api.get("/", (req, res, next) =>{
    console.log("Get request recieved");
})

api.post("/", (req, res, next) =>{
    console.log("Post request recieved");
})
module.exports = api;