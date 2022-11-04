const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id:{
      // integer
      // Doesn't allow null values
      // Set as primary key
      // Uses auto increment
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIcrement: true,
    },
    tag_name: {
      // String
      // Doesn't allow null values
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
