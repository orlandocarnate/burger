// import orm object
var orm = require('../config/orm.js');

// call each orm method
// "SELECT * FROM ?? WHERE ?? = ?";
//selectWhere: function (tableInput, colToSearch, valOfCol)
orm.selectAllFrom("party_name", "parties");

// Console log all the client names.
orm.selectAllFrom("client_name", "clients");

// export burger