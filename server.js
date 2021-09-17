//required dependencies/modules
const express = require("express");
const fs = require("fs");
const path = require("path");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");

//Server application at port 3001
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

app.use(require("./controllers/"));

//Add listener
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("Now listening"));
});
