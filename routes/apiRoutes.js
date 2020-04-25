// ===============================================================================
// DEPENDENCIES
const fs = require("fs");
const db = require("../db/db.json");
// package to give note unique user id
const uuid = require("uuid/v4");

// API GET Requests
// .get/api/notes
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.send(db);
  });

  app.post("/api/notes", function (req, res) {
    // uuid called to generate random id
    const noteID = uuid();
    // object array for new note
    let newNote = {
      id: noteId,
      title: req.body.title,
      text: req.body.text,
    };

    // reads JSON file and stores data as variable
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      const allNotes = JSON.parse(data);
      allNotes.push(newNote);

      // adding new data and pushing that data into new note created
      fs.writeFile("./db/db.json", JSON.stringify(allNotes, null, 2), (err) => {
        if (err) throw err;
        res.send(db);
        console.log("Note created!");
      });
    });
  });
  // delete note function
  app.delete("/api/notes/:id", (req, res) => {
    let noteId = req.params.id;
    // reads data in JSON file
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
      const allNotes = JSON.parse(data);
      const newAllNotes = allNotes.filter(note);

      fs.writeFile(
        "./db/db.json",
        JSON.stringify(newAllNotes),
        (err) => {
          if (err) throw err;
          res.send(db);
          console.log("Note deleted!");
        }
      );
    });
  });
};