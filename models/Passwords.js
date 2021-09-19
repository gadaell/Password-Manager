const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
var CryptoJS = require("crypto-js");
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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

    }
  },
  {
    hooks: {
      async beforeCreate(newPasswordData) {
       newPasswordData.website_password = CryptoJS.AES.encrypt(newPasswordData.website_password, 'encryptMe').toString();
        return newPasswordData;
      },

      async beforeUpdate(updatedPasswordData) {
        updatedPasswordData.website_password = CryptoJS.AES.encrypt(updatedPasswordData.website_password, 'encryptMe').toString();
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
