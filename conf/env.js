/**
 * Author: Umayr Shahid <umayrr@hotmail.com>,
 * Created: 5:28 AM, 27/05/15.
 */

'use strict';

var environments = {
    dev: {
      db: {
        host: 'localhost',
        name: 'hungrilla',
        user: 'root',
        password: ''
      },
      port: process.env.PORT || 3000
    }
};

module.exports = environments;
