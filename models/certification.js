"use strict";
const { Model } = require("sequelize");
const webp = require('webp-converter');
module.exports = (sequelize, DataTypes) => {
  class Certification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Certification.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.BLOB("long"),
        allowNull: false,
        get() {
          return this.getDataValue("image").toString("utf8");
        },
        set(image) {
          let dataBase64 = image;
          let result = webp.str2webpstr(dataBase64,"jpg","-q 60")
          result.then((res)=>{
            this.setDataValue("image", Buffer.from(res, "utf8"));
          })
        }
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Certification",
    }
  );
  return Certification;
};
