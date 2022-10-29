'use strict';
const webp = require('webp-converter');

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
      },
      set(image) {
        let dataBase64 = image;
        let result = webp.str2webpstr(dataBase64,"jpg","-q 60")
        result.then((res)=>{
          this.setDataValue("image", Buffer.from(res, "utf8"));
        })
      }      
    }
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};