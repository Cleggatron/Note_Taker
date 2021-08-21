const express = require("express");
const path = require("path");
const apiRouter = require("./routes/api.js");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Our route forwarding for our api post/get requests

app.use("/api/notes", apiRouter);


//return our notes file
app.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "/public/notes.html"))
);

//handle any other requests with index.html
app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "public/index.html"))
)

app.listen(PORT, () => 
    console.log(`Listening for requests on port ${PORT}.`)
);