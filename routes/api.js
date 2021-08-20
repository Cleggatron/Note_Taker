//Routing for our API requests//
const api = require("express").Router();
const fs = require("fs");


api.get("/", (req, res) =>{
    console.log(`${req.method} request received.`);

    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if(err){
            console.error(err);
            res.status(404).send("Notes not found").end();
        }

        res.json(JSON.parse(data));
    })
})

api.post("/", (req, res) =>{
    console.log("Post request recieved");
})
module.exports = api;