const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

const app = express();
const uri = process.env.DB_CONNECTION;

app.use(bodyParser.json());
// ROUTES

// Middleware

const postRoute = require('./routes/post.js');
app.use('/posts', postRoute);

app.get("/", (req, res) => {
  res.send("Home page")
});


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },()=> {
  console.log("Connected to database!");
});


//app.post
//app.patch
// mongodb+srv://test:1234@cluster0.rzw4u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.listen(3000);
