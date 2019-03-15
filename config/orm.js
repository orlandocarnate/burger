// ORM object made by myself
var connection = require("./connection.js");

let orm = {
    // selectAll method
    all: (getTable, callback) => {
        const queryStr = "SELECT * FROM ??";
        connection.query(queryStr, getTable, (err, result) => {
            if (err) {
                throw err;
            }
            callback(result) // run the callback function with result as argument
        })
    },
    // insertOne method
    create: (newBurger, callback) => {
        const queryStr = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryStr, newBurger, (err, result) => {
            if (err) {
                throw err;
            }
            // run the callback function from burgers_controller.js
            // with result as argument for response.json({id: result.insertId}) 
            callback(result) 
        })
    }

    // updateOne method
}

// export orm object
module.exports = orm;