const logger = require('../utils/loggerWinston');
// const sendMail = require('../nodemailer&twilio/nodemailer.js');
const isAuthenticated = require('../server.js');

const getRoute = (req, res) => {
  logger.info('getRoute');
  res.redirect('/login');
};

function getLogin(req, res) {
  if (req.isAuthenticated()) {
    const { username, password } = req.user;
    const user = { username, password };
    res.render('main', { user });
  } else {
    res.render('login');
  }
}

const getFailLogin = (req, res) => {
  logger.info('getFailLogin');
  res.render('failLogin', {});
};

const getSignUp = (req, res) => {
  logger.info('getSignUp');
  console.log('hola getsignup0');
  if (req.isAuthenticated()) {
    console.log('hola getsignup1');
    const { username, password, name, address, age, phone, url } = req.user;
    const user = { username, password, name, address, age, phone, url };
    req.session.user = user;
    res.redirect('/main');
    // res.render('main', { user });
    // console.log('chau getsignup')
  } else {
    res.render('signup'); //LE PONGO RES.REDIRECT Y NO ME FUNCIONA
    console.log('hola getsignup2'); //ESTA ENTRANDO EN EL ELSE. POR QUE???
  }
};

const getFailSignUp = (req, res) => {
  logger.info('getFailSignUp');

  res.render('failSignUp', {});
};

const getLogout = (req, res) => {
  logger.info('getLogout');
  const { username, password } = req.user;
  const user = { username, password };
  req.session.destroy((err) => {
    if (err) {
      res.send('No se pudo deslogear');
    } else {
      res.render('logout', { user });
    }
  });
};

const failRoute = (req, res) => {
  logger.warn('failRoute');
  res.render('failRoute', {});

  res.status(404);
};

const postLogin = (req, res) => {
  console.log('postLogin clg')
  logger.info('postLogin');
  const { username, password, name, address, age, phone, url } = req.user;
  const user = { username, password, name, address, age, phone, url };
  req.session.user = user;
  res.redirect('/main');
};

const postSignUp = (req, res) => {
  logger.info('postSignUp');
  const { username, password, name, address, age, phone, url } = req.user;
  const user = { username, password, name, address, age, phone, url };
  // sendMail(username);
  res.render('successSignUp', { user });
};

module.exports = {
  getRoute,
  getLogin,
  getFailLogin,
  getSignUp,
  getFailSignUp,
  failRoute,
  getLogout,
  postLogin,
  postSignUp,
};
