import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("src", "views", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`To Do application is listening to port ${process.env.PORT}.`);
});
