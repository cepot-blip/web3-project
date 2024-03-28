const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const api_router = require("./routes/apiRoutes");

const app = express();

// MIDDLEWARE
app.use((req, res, next) => {
  // WEBSITE YOU WISH TO ALLOW TO CONNECT
  res.setHeader("Access-Control-Allow-Origin", "*");

  // REQUEST METHODS YOU WISH TO ALLOW
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS, PATCH, HEAD"
  );

  // REQUEST HEADERS YOU WISH TO ALLOW
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // PASS TO NEXT LAYER OF MIDDLEWARE
  next();
});

app.set("trust proxy", true);

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 201,
  })
);

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: false,
  })
);

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/api", api_router);

// Handle errors
app.use((error, req, res, next) => {
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
