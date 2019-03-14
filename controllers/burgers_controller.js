// import Express & burger.js
var express = require("express");

// create router object
var router = express.Router();

// Main Root directory.
router.get("/", function (req, res) {
    res.render("index");
});

// export router object for server.js
module.exports = router;