# Burger App using a custom ORM
The Burger App is burger logger that uses MySQL, Node, Express, Handlebars and an ORM made from scratch. The app also follows the MVC design pattern and uses Node and MySQL to query and route data, and Handlebars to generate HTML from templates.

## Overview
* Eat-Da-Burger! is a restaurant app that lets users names a burger they'd like to eat which will be added to a MySQL database.
* When the user submits a new burger, it will be displayed on the left column as part of a selection of burgers.
* Along with each burger in the Menu column is a `Devour It` button. When clicked, that selected burger will move to the Eaten column on the right.
* No burger entries are deleted as they are saved to the MySQL database.

## Technology Used
* [Node.js](https://nodejs.org/)
* [MySQL database](https://www.mysql.com/)
* [MySQL package](https://www.npmjs.com/package/mysql) Node module is a driver for MySQL. 
* [Express package](https://www.npmjs.com/package/express) Fast, unopinionated, minimalist web framework.
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars) Node module as the view engine for Express.

## ORM functionality
* The ORM involves methods that send methods as callbacks which also send more callbacks, so this needs to be tracked carefully for it to work properly.
### How the SELECT ALL ORM method works:
1. [controllers/burgers_controller.js] The `router.get("/")` GET route, the router calls the burger.all() function and for its argument sends a callback that will take the final data and render it to the index template.
2. [models/burger.js] The burger.all method here calls the orm.all method, with `burgers` as the parameter for the table in the `SELECT * FROM table` SQL statement, and the callback parameter that will render to the index template.
3. [config/orm.js] In my custom ORM the orm.all(getTable, callback) method is called, with getTable and the callback as two parameters. The getTable is used for the SELECT statment. THe callback finally renders the result to the index handlebar template.

### How the INSERT ORM method works:
1. When a valid text input has been submitted, the form is sent as a POST method to the `/api/burgers` route.
2. [controllers/burgers_controller.js] the `router.post("/api/burgers")` POST route receives the form data and calls the `burgers.create()` method with `req.body.name` as a parameter.
3. [models.burger.js] The `burger.create(name)` method takes in the name paramenter and callback and sends it to the orm.create() method
4. [config/orm.js] The orm.create(name, callback) method use the name parameter in the `INSERT INTO burgers (name) VALUES (?)` SQL statement as a value for `(?)`
5. After the new burger has been successfully added to the database, the page is reloaded, showing the updated list.
6. [response.json({id: result.insertId})](https://github.com/mysqljs/mysql#getting-the-id-of-an-inserted-row) returns the last insterted row id.
        

### How the UPDATE ORM method works:
1. 

## MVC Design Pattern


## Directory structure

* The directory tree shown below was copied from homework_instructions.md

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

## Programmer's Notes
* `app.use(express.urlencoded({ extended: true }));` **urlencoded** encodes certain characters in a URL by replacing them with one or more character triplets that consist of the percent character "%" followed by two hexadecimal digits. The two hexadecimal digits of the triplet(s) represent the numeric value of the replaced character.

* `app.use(express.json());` parses INCOMING requests with JSON payloads and s based on a body parser. ([source] (https://expressjs.com/en/api.html))

* Using ES6 for jQuery Click Event methods won't work:
        * Doesn't work for $(this) method: 
```
        $(".btn-burger").on("click", () => {
                var selectedID = $(this).data("id");
```
        * You need to spell out function ()
```
        $(".btn-burger").on("click", function() {
                var selectedID = $(this).data("id");   
```

## SQL Notes
* The **??** signs are for swapping out *table* or *column* names.
* The **?** signs are for swapping out other *values*.
* [This link](https://en.wikipedia.org/wiki/SQL_injection) helps show how to avoid SQL injection.
