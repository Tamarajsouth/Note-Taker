// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

    // HTML GET Requests
    // get api/notes
    // ---------------------------------------------------------------------------
    app.get("/notes", function(req, res) {
        store
        .getNotes() 
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
      });
    app.post("/notes", function(req, res) {
        store
        .addNote(req.body)
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
    });

// ===============================================================================
// ROUTING
// ===============================================================================
      module.exports = app    
