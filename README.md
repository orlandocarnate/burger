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

