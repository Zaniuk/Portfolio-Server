import sequelize from "../db";
import { DataTypes } from "sequelize";

sequelize.define("Certification", {
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
    },
    company:{
        type: DataTypes.STRING,
        allowNull: false,
    },
});