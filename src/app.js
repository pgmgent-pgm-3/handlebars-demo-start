// import statements
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { create } from "express-handlebars";
import { PORT, VIEWS_PATH } from "./constants.js";

// create an instance of express
const app = express();

// serve static files from the public folder
// they can be accessed from the root of the site (e.g. /assets/images/dino_07.png) 🦕
app.use(express.static("public"));

// ------------------ Handlebars configuration ------------------

// handlebars instance
const hbs = create({
  extname: ".hbs",
  defaultLayout: "main",
});

// set handlebars as the view engine
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", VIEWS_PATH); // location of the handlebars files

// ------------------ End of handlebars config ------------------

app.get("/", (req, res) => {
  const data = {
    title: "Welcome to the data-driven home page",
    message: "This is a test",
    names: ["John", "Jane", "Doe", "Charlie"],
    hobbies: ["Reading", "Coding", "Gaming", "Singing"],
  };
  // render the home.hbs file when the /thisisatest route is accessed
  res.render("home", data);
});

// start the server, listen on port defined in .env file
app.listen(PORT, () => {
  // callback function that is called when the server starts
  console.log(`Application is listening to port ${PORT}.`);
});
