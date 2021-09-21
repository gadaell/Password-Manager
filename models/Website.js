// const { Model, DataTypes } = require("sequelize");
// const bcrypt = require("bcrypt");
// const sequelize = require("../config/connection");

// class Website extends Model {}

// Website.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     website: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     website_username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     website_password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     hooks: {
//       async beforeCreate(newWebsiteData) {
//         newWebsiteData.password = await bcrypt.hash(
//           newWebsiteData.password,
//           10
//         );
//         return newWebsiteData;
//       },

//       async beforeUpdate(updatedWebsiteData) {
//         updatedWebsiteData.password = await bcrypt.hash(
//           updatedWebsiteData.password,
//           10
//         );
//         return updatedWebsiteData;
//       },
//     },
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "website",
//   }
// );

// module.exports = Website;
