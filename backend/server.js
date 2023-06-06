const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("moongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express()

const PORT = process.env.PORT || 5000;

//connect to DB and start server
mongoose
    .connect(process.env.MONGO_URI)
    .then() => {
        app.listen(PORT, (PORT, ( => {
            console.log('Server Running on port ${PORT}')
        })))
    }
    .catch((err) => console.log('Server Running on port ${PORT}')
    )