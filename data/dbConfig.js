const knex = require('knex');
const config = require('../knexfile.js');

module.exports = knex(config.development);

// let client

// switch(process.env.NODE_ENV) {
//     case 'production':
//         client = knex(config.production) //for heroku postgres
//         break
//     case 'test':
//         client = knex(config.testing)
//         break
//     default:
//         client = knex(config.development) //for testing and running SQLite
// }


// module.exports = client