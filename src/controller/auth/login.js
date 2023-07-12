const User = require('../../models/users');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    res.cokkie('token', token);
  } catch(err){
    res.redirect('/signin',{error:err.message})
  }
};

module.exports = login;
