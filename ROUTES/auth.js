const express = require('express');
const routerAuth = express.Router();
const passport = require('passport');

const { getRoute, getLogin, getFailLogin, getSignUp, getFailSignUp, failRoute, getLogout, postLogin, postSignUp } = require('../CONTROLLER/auth.js');

routerAuth.get('/login', getLogin);
routerAuth.post('/login', passport.authenticate('login', { failureRedirect: '/failLogin' }), postLogin);
// app.post('/login', passport.authenticate('login', { failureRedirect: '/failLogin' }), routes.postLogin);

// routerAuth.put('/auth/:id', putUserController);
// routerAuth.delete('/auth/:id', deleteUserByIdController);

module.exports = routerAuth;
