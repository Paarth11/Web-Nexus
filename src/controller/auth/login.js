const User = require('../../models/users');

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await User.matchPasswordAndGenerateToken(email,password);
};
