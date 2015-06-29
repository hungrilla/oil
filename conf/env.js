/**
 * Author: Umayr Shahid <umayrr@hotmail.com>,
 * Created: 5:28 AM, 27/05/15.
 */

'use strict';

var environments = {
  dev: {
    db: {
      host: process.env['db_host'] || 'localhost',
      name: process.env['db_name'] || 'hungrilla',
      user: process.env['db_user'] || 'root',
      password: process.env['db_password'] || ''
    },
    port: process.env['PORT'] || 3000
  },
  staging: {
    db: {
      host: process.env['db_host'] || 'localhost',
      name: process.env['db_name'] || 'hungrilla',
      user: process.env['db_user'] || 'root',
      password: process.env['db_password'] || ''
    },
    port: process.env['PORT'] || 3000
  }
};

module.exports = environments;
