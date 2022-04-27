const bcrypt = require('bcryptjs');

function hashingPassword(password) {
  let salt = bcrypt.genSaltSync(10)
  let hash = bcrypt.hashSync(password, salt)
  return hash
}

function comparePassword(passwordUser, passwordDb) {
  return bcrypt.compareSync(passwordUser, passwordDb)
}

module.exports = {
  hashingPassword,
  comparePassword
}