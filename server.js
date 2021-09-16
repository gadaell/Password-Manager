//required dependencies/modules
const express = require("express");
const fs = require("fs");
const path = require("path");
const exphbs = require("express-handlebars");
//Server application at port 3001
const app = express();
const PORT = process.env.PORT || 3001;
// js files needed to application to work
// const apiRoutes = require("./controllers/apiRoutes");
// const htmlRoutes = require("./controllers/htmlRoutes")
const hbs = exphbs.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use("/", apiRoutes);
// app.use("/", htmlRoutes);
app.use(require("./controllers/"));
//Use public folder
app.use(express.static("public"));
//Add listener
app.listen(PORT, () => {
	console.log("App is now listening on PORT: " + PORT);
});
