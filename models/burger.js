// import orm object
var orm = require('../config/orm.js');

const burger = {
    // the callback parameter renders the results to the index.handlebars template
    all: (callback) => {
        orm.all("burgers", (response) => {
            callback(response);
        })
    },
    create:(burger_name, callback) => {
        orm.create(burger_name, (response) => {
            // forward the callback from burgers_controller.js
            // contatining response.json({id: result.insertId})
            callback(response)
        })
    }
}

// export burger
module.exports = burger;