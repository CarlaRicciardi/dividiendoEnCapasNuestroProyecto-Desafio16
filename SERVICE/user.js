const { findByUsername } = require('../MODELS/user.js');

const findUser = async (username) => {
  const user = await findByUsername(username);
  const dataUser = {
    username: user.username,
    password: user.password,
    name: user.name,
    address: user.address,
    age: user.age,
    phone: user.phone,
    url: user.url,
  };
  return dataUser;
};

const postLoginService = async (username) => {
  const user = await findUser(username);
  return user;
};

const postSignupService = async (user) => {
  console.log('enviar mail de aviso post Signup')
  // const emailRegister = await sendNewRegisterToAdmin(user);
};

module.exports = { postLoginService, postSignupService };
