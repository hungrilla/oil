'use strict';

var model = require('../models/user');

module.exports = {
  findOrCreate: findOrCreate
};

/**
 * Finds or creates a new user.
 * @method
 * @param {object} user - user object.
 * @return {object} promise - a promise to the User creation.
 */
function findOrCreate(user){
  var where = {
    email: user.email
  };
  var defaults = {
    defaults: user
  };
  return model.findOrCreate(where, defaults);
}
