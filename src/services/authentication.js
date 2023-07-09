require('dotenv').config()
const secret = process.env.SECRET_KEY
const JWT = require('jsonwebtoken')

function crateTokenForUser(user){
    const payLoad = {
        _id: user._id,
        email: user.email,
        role: user.role,
    };
    const token = JWT.sign(payLoad,secret)
    return token;
    }
function validateToken(token){
    const payLoad = JWT.verify(token,secret)
    return payLoad;
}

module.exports = { crateTokenForUser, validateToken}


