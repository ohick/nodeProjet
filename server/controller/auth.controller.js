const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const postRegistration = async (req, res) => {
  if (req.error) {
    console.log(req.error);
  }

  const alreadyExists = await User.findOne({ email: req.body.email });

  if (alreadyExists) {
    return res.status(400).json({ success: false, error: 'Cet utilisateur existe déjà' });
  }
  const person = new User({ ...req.body, role: 'admin' });
  await person.save();
  return res.status(200).json({ success: true, redirectUrl: '/login', registration: false });
};

const postLogin = async (req, res) => {
  if (req.error) {
    return res.status(400).json({ success: false, error: 'euh' });
  }

  const user = await User.findOne({ email: req.body.email });

  bcrypt.compare(req.body.password, user.password, function (err, result) {
    if (!result) {
      return res.status(401).json({ success: false, error: 'Wrong email or password' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

    return res.status(200).json({
      success: true,
      redirectUrl: '/',
      token,
      role: user.role,
      username: user.username,
      isAuth: true,
    });
  });
};

const postToken = async (req, res) => {
  return jwt.verify(req.body.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ success: false, error: 'Bad token' });
    res.status(200).json({
      success: true,
      decoded,
    });
  });
};

module.exports = {
  postRegistration,
  postLogin,
  postToken,
};
