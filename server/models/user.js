'use strict';
const{ hashingPassword } = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.ProjectMember,{foreignKey: "UserId"})
      User.belongsToMany(models.Project,{through: "ProjectMember", foreignKey: "UserId"})
    }
  }
  User.init({
    fullName: {
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Wrong email format"
        },
        notNull: {
          msg: "Email cannot be empty"
        },
        notEmpty: {
          msg: "Email cannot be an empty string"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "password cannot be empty"
        },
        notEmpty: {
          msg: "password cannot be an empty string"
        },
        isMoreThan4Carracter(value){
          if(value.length < 5){
            throw new Error('Password minimal 5 caracter')
          }
        }
      }
    },
    githubAccount: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Github Account cannot be empty"
        },
        notEmpty: {
          msg: "Github Account cannot be an empty string"
        }
      }
    },
    discordAccount: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Discord Account cannot be empty"
        },
        notEmpty: {
          msg: "Discord Account cannot be an empty string"
        }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Phone number cannot be empty"
        },
        notEmpty: {
          msg: "Phone number cannot be an empty number"
        },
        isNumeric: {
          msg: "Please enter valid phone number"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate : (user, options) =>  {
        user.password = hashingPassword(user.password)
      }
    }
  });
  return User;
};