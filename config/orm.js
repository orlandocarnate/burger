// ORM object made by myself
var connection = require("./connection.js");

// selectAll method

// insertOne method

// updateOne method

// export orm object


// Object Relational Mapper (ORM)

// Console log all the party names.
// Console log all the client names.
// Console log all the parties that have a party - type of grown - up.
// Console log all the clients and their parties.

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAllFrom: function (colToSearch, tableInput) {
        var queryString = "SELECT ?? FROM ??;";
        connection.query(queryString, [colToSearch, tableInput], function (err, result) {
            if (err) throw err;
            console.log("Select All From---------------------\n",result);
        });
    },
    // findPartyType: function (tableInput, colToSearch, type) {
    //     var queryString = "SELECT ?? FROM ?? WHERE ?? = ?;";
    //     connection.query(queryString, [tableInput, colToSearch, type], function (err, result) {
    //         if (err) throw err;
    //         console.log("Select All From WHERE--------------\n",result);
    //     });
    // },
    // findPartyType: function (tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    //     var queryString =
    //         "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    //     connection.query(
    //         queryString,
    //         [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
    //         function (err, result) {
    //             if (err) throw err;
    //             console.log(result);
    //         }
    //     );
    // }
};

module.exports = orm;