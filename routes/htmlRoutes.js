// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const router = require("express").Router();
const path = require("path");
// ===============================================================================
// ROUTING
// ===============================================================================


  // HTML GET Requests
  // ---------------------------------------------------------------------------
  router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

module.exports = router;

