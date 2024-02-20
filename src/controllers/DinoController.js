import { dinosaurs } from "../data/data.js";

// overzicht van alle dino's
export const index = (req, res) => {
  const data = {
    title: "Dinosaurs",
    dinosaurs: dinosaurs,
  };
  res.render("dinosaurs", data);
};

// detailpagina van één dino
export const show = (req, res) => {
  const slug = req.params.slug;

  // send the description of the dino with that slug...

  res.send("Dino detail with slug: " + slug); // another placeholder
};
