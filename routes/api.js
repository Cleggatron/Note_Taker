//Routing for our API requests//
const api = require("express").Router();
const fs = require("fs");
//import a random id generator
const {v4 : uuidv4} = require("uuid");

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
    
    const {title, text} = req.body;
    
    //validate our incoming note
    if(!title || !text){
        res.status(500).statusMessage("Not all the required data").end();
    }else{
        //create our new note obj
        const newNote = {
            id: uuidv4(),
            title,
            text   
        }

        fs.readFile("./db/db.json", "utf8", (err, data) =>{
            if(err) {
                console.error(err)
            } else{
                //update our file
                const arrayData = JSON.parse(data);
                arrayData.push(newNote);
                //send data back for the note render
                res.json(JSON.parse(data));

                //update db.json
                fs.writeFile("./db/db.json", JSON.stringify(arrayData, null, 4), err =>
                    err ? console.error(err) : console.log("Data written to file.")
                )
            }
        })
    }
    
    

})
module.exports = api;