const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express(); // We use express to define routes

// Sever create on Mongo DB Atlas
mongoose.connect('mongodb+srv://nanda:dagostin@cluster0-197pe.azure.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET   /  POST  /  PUT   / DELETE -> Verbs from a Rest API
//create / insert / update / delete -> function of each verbs.

// * explain a little bit about REQUEST *
// req.params = Access route params (query) 
// req.query = Access query params (update and delete)
// req.body = Access resquest's body (create and upgrade)

app.use(express.json()); // This command tell express to work with json
app.use(routes);

app.listen(3333);
