// import statements
import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import { create } from "express-handlebars";
import { SOURCE_PATH } from "./constants.js";

// create an instance of express
const app = express();

// serve static files from the public folder
// they can be accessed from the root of the site (e.g. /assets/images/dino_07.png) 🦕
app.use(express.static("public"));

// ----------------- HANDLEBARS ----------------- //
const hbs = create({
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(SOURCE_PATH, "views"));

// ----------------- ROUTES ----------------- //

// GET route to serve the index.html file
app.get("/", (req, res) => {
  const data = {
    firstname: "Timmy",
    motto: "<strong>I love dinosaurs so much</strong>",
    person: {
      firstname: "Freddy",
      lastname: "Rogers",
    },
    partner: {
      firstname: "Chantal",
      lastname: "Decker",
    },
    friends: [
      {
        name: "T-Rexxy",
        age: 1000000000,
        image: "/assets/images/dino_01.png",
      },
      {
        name: "Pterodactyl",
        age: 233,
        image: "/assets/images/dino_02.png",
      },
      {
        name: "Stegosaurus",
        age: 1000000000,
        image: "/assets/images/dino_03.png",
      },
    ],
  };
  res.render("home", data);
});

app.get("/trex", (req, res) => {
  res.sendFile(path.resolve("src", "views", "bronto.html"));
});

// start the server, listen on port defined in .env file
app.listen(process.env.PORT, () => {
  // callback function that is called when the server starts
  console.log(`Application is listening to port ${process.env.PORT}.`);
});
