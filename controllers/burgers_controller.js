// import Express & burger.js
var express = require("express");

// create router object
var router = express.Router();

// import burger.js MODEL for database functions
let burger = require("../models/burger.js");

// Main Root directory.
router.get("/", function (req, res) {
    burger.all( (db_data) => {
        let burgerHBSObj = {
            burgers: db_data
        }
        console.log("burgerHBSObj: ", burgerHBSObj);
        res.render("index", burgerHBSObj);
    });
});

// export router object for server.js
module.exports = router;