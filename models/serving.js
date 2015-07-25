'use strict';

var Sequelize = require('sequelize');
var sequelize = require('../conf/sequelize')();
var Menu = require('../models/menu');

var Serving = sequelize.define('serving', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  menuId:{
    type: Sequelize.UUID,
    unique: true
  },
  pristinePrice:{
    type: Sequelize.STRING(255)
  },
  price: {
    type: Sequelize.INTEGER
  },
  pristineServes: {
    type: Sequelize.STRING(255)
  },
  serves: {
    type: Sequelize.INTEGER
  }
});

Serving.hasMany(Menu);

module.exports = Serving;
