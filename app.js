const express = require("express");
const app = express();

app.use(express.json());

const coffees = require("./routes/coffees");

app.use("/coffees", coffees);

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    });
});

module.exports = app;
