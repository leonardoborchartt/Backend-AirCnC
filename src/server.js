const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const app = express();

mongoose.connect('mongodb+srv://migrate:migrate@cluster0-caszl.mongodb.net/semana09?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

//req.query filtros e req.params rotass
//req.body corpo da requisicao json
app.use(cors());    
app.use(express.json()); // express use json
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);
app.listen(3333);