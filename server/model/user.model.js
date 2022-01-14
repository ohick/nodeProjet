const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, require: true },
});

UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, saltRounds);

  next();
});

module.exports = mongoose.model('User', UserSchema);
