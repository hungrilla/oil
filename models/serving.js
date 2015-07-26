'use strict';

var Sequelize = require('sequelize');
var sequelize = require('../conf/sequelize')();
var Menu = require('./menu');

var Serving = sequelize.define('serving', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  pristinePrice:{
    type: Sequelize.TEXT('medium')
  },
  price: {
    type: Sequelize.INTEGER
  },
  pristineServes: {
    type: Sequelize.TEXT('medium')
  },
  serves: {
    type: Sequelize.INTEGER
  }
});

//associating Menu and Serving with a 1:M relationship
Menu.hasMany(Serving, {foreignKey: 'menuId'});
Serving.belongsTo(Menu, {foreignKey: 'menuId'});

module.exports = Serving;
