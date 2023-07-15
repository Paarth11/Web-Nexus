const { validateToken } = require('../services/authentication');

function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    console.log(tokenCookieValue);
    if (!tokenCookieValue) {
      return next();
    }
    try {
      const UserPaload = validateToken(tokenCookieValue);
      req.user = UserPaload;
    } catch (err) {}
    return next();
  };
}
module.exports = checkForAuthenticationCookie;
