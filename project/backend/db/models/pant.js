'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pant.hasMany(models.Outfit, {
        foreignKey: 'pantId'
      })
    }
  };
  Pant.init({
    x: DataTypes.INTEGER,
    y: DataTypes.INTEGER,
    width: DataTypes.INTEGER,
    height: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pant',
  });
  return Pant;
};
