const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, max: 100 },
  password: { type: String, required: true, max: 100 },
  name: { type: String, required: true, max: 100 },
  address: { type: String, required: true, max: 100 },
  age: { type: Number, required: true, max: 100 },
  phone: { type: String, required: true, max: 100 },
  url: { type: String, required: true, max: 100 },
});

const modelUser = mongoose.model('users', UserSchema);

const findByUsername = async (username) => {
  const userFound = await modelUser.findOne({ username: username });
  return userFound;
};

module.exports = { modelUser, findByUsername };
