'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dish.belongsTo(models.Category)
      Dish.belongsTo(models.cart)
      Dish.belongsTo(models.orderItem)
    }
  }
  Dish.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    image: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'dish',
  });
  return Dish;
};