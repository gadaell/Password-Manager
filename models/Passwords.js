const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Passwords extends Model {

}

Passwords.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,

    },
    websiteUsername: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
 
      },
    websitePassword: {
      type: DataTypes.STRING,
      allowNull: false,

    }
  },
  {
    hooks: {
      async beforeCreate(newPasswordData) {
        console.log(newPasswordData);
        newPasswordData.websitePassword = await bcrypt.hash(newPasswordData.websitePassword, 10);
        return newPasswordData;
      },

      async beforeUpdate(updatedPasswordData) {
        updatedPasswordData.websitePassword = await bcrypt.hash(updatedPasswordData.websitePassword, 10);
        return updatedPasswordData;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'passwords'
  }
);

module.exports = Passwords;
