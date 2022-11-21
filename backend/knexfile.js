// module.exports = {
//  development: {
//    client: 'mysql',
//    debug: true,
//    connection: {
//      host : '127.0.0.1',
//      port : 3306,
//      user : 'root',
//      password : 'frozenhorse',
//      insecureAuth: true,
//      database : 'crystalball'
//    }
//  }
// };

const { provinces } = require('./util/random-generator');

require('dotenv').config();
module.exports = {
  client: 'mysql',
  debug: true,
  connection: {
  host : process.env.MYSQL_CLOUD_HOST,
  port : process.env.MYSQL_PORT,
  user : process.env.MYSQL_CLOUD_USER,
  password : process.env.MYSQL_CLOUD_PASS,
  ssl : true,
  database : process.env.MYSQL_DB
},
  pool: {
    min: 0,
    max: 15
  },
  seeds: {
    directory: './seeds'
  },
  migrations: {
    directory: './migrations'
  }
}


// docker run -d -p 3306:3306 --name mysql-container -e MYSQL_ROOT_HOST=% -e MYSQL_ROOT_PASSWORD=frozenhorse mysql/mysql-server:latest