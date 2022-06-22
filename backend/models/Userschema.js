var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  hash: String,
  salt: String
}, {timestamps: true});

const Users = new mongoose.model('User', UserSchema);
module.exports = Users;