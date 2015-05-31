'use strict';

var Sequelize = require('sequelize');
var sequelize = require('../conf/sequelize')();

module.exports = sequelize.define('restaurant', {
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4(),
        primaryKey: true
    },
    url: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
    },
    name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER(2)
    },
    type: {
        type: Sequelize.STRING(255)
    }
});