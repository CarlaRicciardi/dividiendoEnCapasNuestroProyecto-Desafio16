const logger = require('../utils/loggerWinston.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { postLoginService, postSignupService } = require('../SERVICE/user.js');

function getLoginController(req, res) {
  logger.log('info', '/login - GET');
  if (req.isAuthenticated()) {
    const { username, password } = req.user;
    const user = { username, password };
    res.render('main', {user});
  } else {
    res.render('login', {});
  }
}

const getFailLoginController = (req, res) => {
  logger.log('info', '/faillogin - GET');
  res.render('failLogin', {});
};

const getSignupController = (req, res) => {
  logger.log('info', '/signup - GET');
  if (req.isAuthenticated()) {
    const { username, password, name, address, age, phone, url } = req.user;
    const user = { username, password, name, address, age, phone, url };
    req.session.user = user
    res.redirect('/main');
  } else {
    res.render('signup', {});
  }
};

const getFailSignupController = (req, res) => {
  logger.log('info', '/failsignup - GET');
  res.render('failSignUp', {});
};

const getLogoutController = (req, res) => {
  logger.log('info', '/logout - GET');
  const { username, password } = req.user;
  const user = { username, password };
  req.session.user = user
  req.session.destroy((err) => {
    if (err) {
      logger.log('error', err);
      res.send('No se pudo deslogear');
    } else {
      res.render('logout',{user})
    }
  });
};

const failRouteController = (req, res) => {
  logger.warn('failRoute');
  res.render('failRoute', {});

  res.status(404);
};

const postLoginController = async (req, res) => {
  const { username, password } = req.user;
  const user = await postLoginService(username);
  req.session.user = user
  res.redirect('/main');
  logger.log('info', '/login - POST - render main.hbs');
};

const postSignupController = async (req, res) => {
  logger.log('info', '/signup - POST');
  const { username, password, name, address, age, phone, url } = req.user;
  const user = { username, password, name, address, age, phone, url };
  req.session.user = user
  await postSignupService(user);
  res.redirect('/main');
};

module.exports = {
  getLoginController,
  getFailLoginController,
  getSignupController,
  getFailSignupController,
  failRouteController,
  getLogoutController,
  postLoginController,
  postSignupController,
};
