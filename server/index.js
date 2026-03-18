const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connect } = require("./config/database");
const responseRoutes = require("./routes/responseRoutes");
require("dotenv").config();

const app = express();
const port = Number(process.env.PORT) || 5000;

// database connection
connect();

// cors
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow any origin and reflect it back to fully support CORS + credentials
      callback(null, origin || true);
    },
    credentials: true,
    optionsSuccessStatus: 200
  })
);

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser
app.use(cookieParser());

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/response", responseRoutes);

// get respose
app.get("/", (req, res) => {
  res.send("server is running");
});
// server listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
