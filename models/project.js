"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      article: {
        type: DataTypes.TEXT,
        // allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.BLOB("long"),
        allowNull: false,
        get() {
          return this.getDataValue("image")?.toString('utf8');
        },
      },
      tags: {
        type: DataTypes.STRING,
        allowNull: false,
        get(){
          return this.getDataValue("tags").split("|");
        }
      },
      github: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Projects",
    }
  );
  return Project;
};
