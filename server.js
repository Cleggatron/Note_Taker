const express = require("express");
const PORT = process.env.PORT || 3001;
const path = require("path");

const app = express();
//Our route forwardin for our api post/get requests
const apiRouter = require("./routes/api.js");

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