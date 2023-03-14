const express = require('express');
const routerAuth = express.Router();
const passport = require('passport');

const { getRoute, getLogin, getFailLogin, getSignUp, getFailSignUp, failRoute, getLogout, postLogin, postSignUp } = require('../CONTROLLER/auth.js');

// routerAuth.get('/', getRoute); // hacer un menu mas adelante.. 

routerAuth.get('/login', getLogin);
routerAuth.post('/login', passport.authenticate('login', { failureRedirect: '/failLogin' }), postLogin);
routerAuth.get('/failLogin', getFailLogin);

routerAuth.get('/signup', getSignUp);
routerAuth.get('/failSignUp', getFailSignUp);
routerAuth.post('/signup', passport.authenticate('signup', { failureRedirect: '/failSignUp' }), postSignUp);

routerAuth.get('/logout', getLogout);

routerAuth.get('*', failRoute);

module.exports = routerAuth;
