import { person, navItems } from "../data/data.js";

export const home = (req, res) => {
  const data = {
    title: "Welcome to the data-driven home page",
    content: "Home is where the heart is.",
    names: ["John", "Jane", "Doe", "Charlie"],
    hobbies: ["Reading", "Coding", "Gaming", "Singing"],
    person,
    something: "<script>console.log(document.body.innerHTML);</script>",
    navItems,
  };
  // render the home.hbs file when the /thisisatest route is accessed
  res.render("pages/home", data);
};

export const contact = (req, res) => {
  const data = {
    title: "Contact",
    content: "This is the about page.",
    person,
    navItems,
  };
  // render the about.hbs file when the /about route is accessed
  res.render("pages/default", data);
};

export const privacyPolicy = (req, res) => {
  const data = {
    title: "Privacy Policy",
    content: "This is the privacy policy page.",
    foo: "bar",
    person,
    navItems,
  };
  // render the about.hbs file when the /about route is accessed
  res.render("pages/default", data);
};
