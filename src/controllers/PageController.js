const globalData = {
  person: {
    firstname: "Frederick",
    lastname: "Roegiers",
    location: {
      city: "Ghent",
      country: "Belgium",
    },
  },
};

export const home = (req, res) => {
  const data = {
    title: "Welcome to the data-driven home page",
    content: "Home is where the heart is.",
    names: ["John", "Jane", "Doe", "Charlie"],
    hobbies: ["Reading", "Coding", "Gaming", "Singing"],
    person: globalData.person,
    something: "<script>console.log(document.body.innerHTML);</script>",
  };
  // render the home.hbs file when the /thisisatest route is accessed
  res.render("pages/home", data);
};

export const about = (req, res) => {
  const data = {
    title: "About",
    content: "This is the about page.",
    person: globalData.person,
  };
  // render the about.hbs file when the /about route is accessed
  res.render("pages/default", data);
};

export const privacyPolicy = (req, res) => {
  const data = {
    title: "Privacy Policy",
    content: "This is the privacy policy page.",
    foo: "bar",
    person: globalData.person,
  };
  // render the about.hbs file when the /about route is accessed
  res.render("pages/default", data);
};
