import express from "express";

const app = express();
app.listen(() => console.log(`Listening!`));

const handleHome = (req, res) => res.send("Home");
const handleAboutUs = (req, res) => res.send("About us");
const handleContact = (req, res) => res.send("Contact");
const handleProtected = (req, res) => res.send("Protected");

const consoleMW = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};
const protectedMW = (req, res) => res.redirect();

app.get("/", handleHome);

app.use(consoleMW());
app.get("/about-us", handleAboutUs);

app.use(consoleMW());
app.get("/contact", handleContact);

app.use(protectedMW());
app.get("/protected", handleProtected);