export const home = (req, res) => {
  const data = {
    title: "Welcome to the data-driven home page",
    message: "This is a test",
    names: ["John", "Jane", "Doe", "Charlie"],
    hobbies: ["Reading", "Coding", "Gaming", "Singing"],
    person: {
      firstname: "Jeffrey",
      lastname: "Roegiers",
      location: {
        city: "Ghent",
        country: "Belgium",
      },
    },
    something: "<script>console.log(document.body.innerHTML);</script>",
  };
  // render the home.hbs file when the /thisisatest route is accessed
  res.render("home", data);
};

export const dinosaurs = (req, res) => {
  const data = {
    title: "Dinosaurs",
    dinosaurs: [
      { name: "Stegosaurus", image: "dino_01.png" },
      { name: "T-Rex", image: "dino_02.png" },
      { name: "Velociraptor", image: "dino_03.png" },
      { name: "Triceratops", image: "dino_04.png" },
      { name: "Brachiosaurus", image: "dino_05.png" },
      { name: "Pterodactyl", image: "dino_06.png" },
      { name: "Apatosaurus", image: "dino_07.png" },
      { name: "Diplodocus", image: "dino_08.png" },
    ],
  };

  res.render("dinosaurs", data);
};
