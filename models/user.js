'use strict';

var Sequelize = require('sequelize');
var sequelize = require('../conf/sequelize')();

module.exports = sequelize.define('user', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  email:{
    type: Sequelize.STRING,
    unique: true
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  lastLogin: {
    type: Sequelize.DATE
  }
});
