'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Body extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Body.hasMany(models.Outfit, {
        foreignKey: 'bodyId'
      })
    }
  };
  Body.init({
    x: DataTypes.INTEGER,
    y: DataTypes.INTEGER,
    width: DataTypes.INTEGER,
    height: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Body',
  });
  return Body;
};
