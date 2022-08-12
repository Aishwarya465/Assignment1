// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();

// mongoose.connect(process.env.MONGO_URL)
// .then(() => console.log("DB Connection Successfull!"))
// .catch((err) => {
//     console.log(err);
// });

// app.listen(process.env.PORT || 5000, () => {
//     console.log("Backend Server is running!");
// })

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const mongoData = process.env.DATABASE_URL;

mongoose.connect(mongoData);

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json())

const routes = require('./routes/routes');

app.use('/api', routes)


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

