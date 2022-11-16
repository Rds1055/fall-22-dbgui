module.exports = {
 development: {
   client: 'mysql',
   debug: true,
   connection: {
     host : '127.0.0.1',
     port : 3306,
     user : 'root',
     password : 'frozenhorse',
     insecureAuth: true,
     database : 'crystalball'
   }
 }
};


// docker run -d -p 3306:3306 --name mysql-container -e MYSQL_ROOT_HOST=% -e MYSQL_ROOT_PASSWORD=frozenhorse mysql/mysql-server:latest