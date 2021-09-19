const User = require("./User");
const Passwords = require("./Passwords");

<<<<<<< HEAD
Passwords.belongsTo(User, {
  foreignKey: link,
});

User.hasMany(Passwords);
=======
User.hasMany(Passwords, {
	foreignKey: "link",
});

Passwords.belongsTo(User, {
	foreignKey: "link",
});
>>>>>>> origin/route-testing

module.exports = { User, Passwords };
