// import statements
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { create } from "express-handlebars";
import { PORT, VIEWS_PATH } from "./constants.js";
import { home } from "./controllers/PagesController.js";
import { index, show } from "./controllers/DinoController.js";

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

// page routes
app.get("/", home);

// dino routes
app.get("/dinosaurs", index);
app.get("/dinosaurs/:slug", show);

// start the server, listen on port defined in .env file
app.listen(PORT, () => {
  // callback function that is called when the server starts
  console.log(`Application is listening to port ${PORT}.`);
});
