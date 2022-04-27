'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.hasMany(models.ProjectMember,{foreignKey: "ProjectId"})
      Project.belongsToMany(models.User,{through: "ProjectMember", foreignKey: "ProjectId"})
    }
  }
  Project.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name cannot be empty"
        },
        notEmpty: {
          msg: "Name cannot be an empty string"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Description cannot be empty"
        },
        notEmpty: {
          msg: "Description cannot be an empty string"
        }
      }
    },
    status: DataTypes.STRING,
    imageType: DataTypes.STRING,
    imageName: DataTypes.STRING,
    imageData: DataTypes.BLOB('long')
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};