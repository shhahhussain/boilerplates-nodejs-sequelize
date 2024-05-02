const express = require("express");
const cors = require("cors");
const router = require("./routes");

// error handling by
process.on("uncaughtException", (e) => {
  console.log(e);
});

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cors());

// Structure request response
app.use(function (req, res, next) {
  // Success response
  res.success = async (data, status = 200) => {
    return res.status(status).send({ success: true, error: null, body: data });
  };

  // Internal request response
  res.internalError = async (error) => {
    return res.status(error.status || 500).send({
      success: false,
      error: error.message || "Internal Server Error",
      body: null,
    });
  };
  next();
});

// routes
app.use("/", router);
app.use("/images", express.static(__dirname + "/public/images"));

// catch 404 later
app.use((req, res) => {
  return res.status(404).send("Error 404, Route does not exist");
});

module.exports = app;
