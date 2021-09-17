const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Passwords extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
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
      validate: {
        isEmail: true
      }
    },
    websiteUsername: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
    websitePassword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    }
  },
  {
    hooks: {
      async beforeCreate(newPasswordData) {
        newPasswordData.password = await bcrypt.hash(newPasswordData.password, 10);
        return newPasswordData;
      },

      async beforeUpdate(updatedPasswordData) {
        updatedPasswordData.password = await bcrypt.hash(updatedPasswordData.password, 10);
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
