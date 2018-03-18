'use strict';

// Dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
global.Promise = require('bluebird');
const bodyParser = require('body-parser');
const passport = require('passport');
const BearerStrategy = require('passport-azure-ad').BearerStrategy;
const { credentials } = require('./app/auth/config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(cors());

let authenticatedUserTokens = [];

passport.use(new BearerStrategy(credentials, (token, done) => {
    let currentUser = null;

    let userToken = authenticatedUserTokens.find(u => {
        currentUser = u;
        u.sub === token.sub;
    });

    if (!userToken) {
        authenticatedUserTokens.push(token);
        currentUser = token;
    }

    return done(null, currentUser, token);
}));

app.use(express.static('./public'));

app.get('/api/public', (req, res, next) => res.send({ data: 'This is public data' }));
app.get('/api/private', passport.authenticate('oauth-bearer', { session: false }), (req, res, next) => res.send({ data: 'This is super secrete private data. This means you have a valid token. Or you are a hacker :s' }));

app.listen(process.env.PORT || 1337, () => console.log('API is running on port ' + (process.env.PORT || 1337)));
