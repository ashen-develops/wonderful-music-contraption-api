const express = require('express');
const musicRouter = express.Router();
const bodyParser = express.json();
const { v4: uuid } = require('uuid');
const logger = require('../logger');
const { isWebUri } = require('valid-url');

musicRouter
    .route('/')
    .get((req, res) => {
        res.json(store);
    })
    .post(bodyParser, (req, res) => {
        for (const field of [])
    })