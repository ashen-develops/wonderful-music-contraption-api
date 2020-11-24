const express = require('express');
const usersRouter = express.Router();
const bodyParser = express.json();
const { v4: uuid } = require('uuid');
const logger = require('../logger');
const { isWebUri } = require('valid-url');
const UsersService = require('./users-service')
const xss = require('xss')

const serializeUsers = user => ({
    id: user.id,
    user_name: xss(user.user_name),
    password: xss(user.password)
})

usersRouter
    .route('/')
    .get((req, res) => {
        res.json(store);
    })
    .post(bodyParser, (req, res) => {
        for (const field of [])
    })