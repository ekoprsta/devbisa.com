'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProjectMember.belongsTo(models.User,{foreignKey: "UserId"})
      ProjectMember.belongsTo(models.Project,{foreignKey: "ProjectId"})
    }
  }
  ProjectMember.init({
    UserId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProjectMember',
  });
  return ProjectMember;
};