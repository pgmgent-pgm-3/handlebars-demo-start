export const home = (req, res) => {
  const data = {
    title: "Welcome to the data-driven home page",
    message: "This is a test",
    names: ["John", "Jane", "Doe", "Charlie"],
    hobbies: ["Reading", "Coding", "Gaming", "Singing"],
  };
  // render the home.hbs file when the /thisisatest route is accessed
  res.render("home", data);
};
