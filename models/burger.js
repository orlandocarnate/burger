// import orm object
var orm = require('../config/orm.js');

const burger = {
    // the callback parameter renders the results to the index.handlebars template
    all: (callback) => {
        orm.all("burgers", (response) => {
            callback(response);
        })
    },
    create:(callback) => {
        orm.create(newBurger, (response) => {
            callback(response)
        })
    }
}

// export burger
module.exports = burger;