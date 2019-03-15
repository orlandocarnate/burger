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

router.post("/api/newburger", function (request, response) {
    burger.create( request.body.burger_name, (result) => {
        // return the id of the inserted row
        // https://github.com/mysqljs/mysql#getting-the-id-of-an-inserted-row
        response.json({id: result.insertId});
        console.log("Newly added ID: ", result.insertId);
    });
});

router.put("/api/update", function (request, response) {
    console.log(request.body.id);
    burger.update( request.body.id, (result) => {
        response.json({id: result.insertId});
        console.log("Updated ID: ", result.insertId);
    });
});

// export router object for server.js
module.exports = router;