const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Passwords extends Model {}

Passwords.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		link: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		website: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		website_username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		website_password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		hooks: {
			async beforeCreate(newPasswordData) {
				console.log(newPasswordData);
				newPasswordData.website_password = await bcrypt.hash(
					newPasswordData.website_password,
					10
				);
				return newPasswordData;
			},

			async beforeUpdate(updatedPasswordData) {
				updatedPasswordData.website_password = await bcrypt.hash(
					updatedPasswordData.website_password,
					10
				);
				return updatedPasswordData;
			},
		},
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "passwords",
	}
);

module.exports = Passwords;
