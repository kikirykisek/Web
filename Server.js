const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hlavní stránka");
});

app.get("/login", (req, res) => {
    res.send("Login stránka");
});

app.get("/mail", (req, res) => {
    res.send("Mail stránka");
});

app.get("/api", (req, res) => {
    res.json({ status: "OK" });
});

app.listen(3000, () => {
    console.log("Server běží");
});
