'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserInfo.init({
    userId:DataTypes.INTEGER,
    alamat: DataTypes.TEXT,
    telp: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserInfo',
  });
  return UserInfo;
};