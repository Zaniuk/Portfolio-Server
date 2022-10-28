import sequelize from "../db";
import { DataTypes } from "sequelize";

sequelize.define("Article", {
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
    image: {
        type: DataTypes.BLOB("long"),
        allowNull: false,
        get() {
            return this.getDataValue("image").toString("utf8");
        }
    }
});
