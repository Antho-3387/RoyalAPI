import express from "express";

const app = express();

// Sert les fichiers HTML/CSS/JS du dossier public
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running on port " + port));