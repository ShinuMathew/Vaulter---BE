'use strict'

const express = require('express'),
    joi = require('joi'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path');

const PORT = process.env.PORT || 5000;
// Express app
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {    
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.listen(PORT, () => console.log(`Server started successfully at PORT : ${PORT}`))
