// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");
var fs = require("fs");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
// Starts the server to begin listening
app.listen(PORT, () => console.log("Listening on PORT" + PORT));
