const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    role: {
        type: DataTypes.ENUM('admin', 'member'),
        defaultValue: 'member',
    },
 
    otp: {
  type: DataTypes.STRING,
  allowNull: true
},

  isVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  } 
},
{
    timestamps: true,
    
});
module.exports = User;