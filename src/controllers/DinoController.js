import { dinosaurs } from "../data/data.js";

// overzicht van alle dino's
export const index = (req, res) => {
  const data = {
    title: "Dinosaurs",
    dinosaurs: dinosaurs,
  };
  res.render("dinos/index", data);
};

// detailpagina van één dino
export const show = (req, res) => {
  const slug = req.params.slug;

  // send the description of the dino with that slug...
  const dino = dinosaurs.find((dino) => dino.slug === slug);

  if (!dino) {
    res.status(404).send("404 - This dino is probably extinct."); // nerdy humor
    return;
  }

  // render detail template with the dino data
  res.render("dinos/show", dino);
};
