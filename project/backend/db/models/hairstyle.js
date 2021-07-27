'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hairstyle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hairstyle.hasMany(models.Outfit, {
        foreignKey: 'hairstyleId'
      })
    }
  };
  Hairstyle.init({
    x: DataTypes.INTEGER,
    y: DataTypes.INTEGER,
    width: DataTypes.INTEGER,
    height: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hairstyle',
  });
  return Hairstyle;
};
