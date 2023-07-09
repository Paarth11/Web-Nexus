const mongoose = require('mongoose');
const { randomBytes, createHmac } = require('crypto');
const { crateTokenForUser } = require('../services/authentication');

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    profileImageURL: {
      type: String,
      default: '/images/default.png',
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER',
    },
  },
  { timestamps: true }
);

userSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next;

  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac('sha256', salt)
    .update(user.password)
    .digest('hex');

  user.password = hashedPassword;
  user.salt = salt;
});

userSchema.static(
  'matchPasswordAndGenerateToken',
  async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) throw new Error('USER NOT FOUND');

    const salt = user.salt;
    const hashedPassword = user.hashedPassword;

    const userPorvidedPassword = createHmac('sha256', salt)
      .update(password)
      .digest('hex');

    if (!hashedPassword == userPorvidedPassword)
      throw new Error('PASSWORD NOT MATCHED');

    const token = crateTokenForUser(user);
    return token;
  }
);

const User = mongoose.model('user', userSchema);
module.exports = User;
