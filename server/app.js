const express = require('express');
const app = express();
const errorMiddleware = require("./middlewares/error");

app.use(express.json());
app.use('/api/v1',require('./routes/index'));

// Middleware for Errors
app.use(errorMiddleware);
module.exports = app;