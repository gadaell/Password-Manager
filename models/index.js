const User = require("./User");
const Passwords = require("./Passwords");

Passwords.belongsTo(User, {
  foreignKey: link,
});

User.hasMany(Passwords);

module.exports = { User, Passwords };
