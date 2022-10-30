'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Article.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: {
      type: DataTypes.BLOB('long'),
      get() {
        return this.getDataValue('image').toString('utf8');
      }
    }
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};