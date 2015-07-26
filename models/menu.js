/**
 * Author: Umayr Shahid <umayrr@hotmail.com>,
 * Created: 20:55, 05/06/15.
 */

'use strict';

var Sequelize = require('sequelize');
var sequelize = require('../conf/sequelize')();

module.exports = sequelize.define('menu', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4(),
    primaryKey: true
  },
  restaurantId: {
    type: Sequelize.UUID,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  description: {
    type: Sequelize.BLOB('long')
  },
  type: {
    type: Sequelize.STRING(255)
  }
});
