'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todolist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  todolist.init({
    body: DataTypes.STRING,
    projectId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    IsChecked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'todolist',
  });
  return todolist;
};