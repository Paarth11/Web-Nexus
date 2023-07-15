const User = require('../../models/users');

const register = async (req, res) => {
  const { fullName, email, password } = req.body;
  await User.create({ fullName, email, password });
  res.redirect('/users/signin');
};
module.exports = register;