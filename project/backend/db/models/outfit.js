'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Outfit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Outfit.belongsTo(models.User),
      Outfit.hasMany(models.Comment, {
        foreignKey: 'outfitId'
      })
    }
  };
  Outfit.init({
    userId: DataTypes.INTEGER,
    bodyId: DataTypes.INTEGER,
    hairstyleId: DataTypes.INTEGER,
    accentId: DataTypes.INTEGER,
    hatId: DataTypes.INTEGER,
    shirtId: DataTypes.INTEGER,
    pantId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Outfit',
  });
  return Outfit;
};
