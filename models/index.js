const User = require("./User");
const Passwords = require("./Passwords");

User.hasMany(Passwords, {
	foreignKey: "link",
});

Passwords.belongsTo(User, {
	foreignKey: "link",
});

module.exports = { User, Passwords };
