const express = require("express");
const logs = require("./models/log.js");
const app = express();
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("welcome to the captains's log")
});

const logsController = require("./controllers/logsController.js");
app.use("/logs", logsController)

app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
});

module.exports = app;
