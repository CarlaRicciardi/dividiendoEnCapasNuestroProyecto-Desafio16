const express = require('express');
const routerUser = express.Router();
const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;

const { getLoginController, getFailLoginController, getSignupController, getFailSignupController, failRouteController, getLogoutController, postLoginController, postSignupController } = require('../CONTROLLER/user.js');


routerUser.get('/login', getLoginController);
routerUser.post('/login', passport.authenticate('login', { failureRedirect: '/failLogin' }), postLoginController);
routerUser.get('/api/failLogin', getFailLoginController);

routerUser.get('/signup', getSignupController);
routerUser.get('/api/failsingUp', getFailSignupController);
routerUser.post('/signup', passport.authenticate('signup', { failureRedirect: '/failSignUp' }), postSignupController);

routerUser.get('/logout', getLogoutController);

routerUser.get('*', failRouteController);

module.exports = routerUser;
