/* eslint-disable no-undef */
require("dotenv").config();
const {REACT_APP_FRONTEND_URL} = process.env;
const cors = require("cors");
const express = require("express");
const app = express();
const router = require("./router");
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: REACT_APP_FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],  
  
  })
);
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5174');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Erreur CORS : origine non autorisée.');
  } else {
    next(err);
  }
});
// import and mount the API routes
app.use(router);
// ready to export
module.exports = app;
  // optionsSuccessStatus: 200,