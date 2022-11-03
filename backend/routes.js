const pool = require('./db')

const connect = (res, callback) => {
    pool.getConnection((error, connection) => {
        if(error) {
            logger.error('Problem obtaining MySQL connection', error);
            res.status(400).send('Problem obtaining MySQL connection');
        } else {
            callback(connection);
        }
    });
}

const simpleQuery = (res, sql, query, fields, callback) => {
    sql.query(query, fields, (error, rows, fields) => {
        if(error) {
            sql.release();
            console.log(error);
            res.status(400).send("An error has occurred");
        } else {
            callback(rows);
        }
    });
}

const returnQuery = (res, query, fields) => {
    connect(res, (sql) => {
        simpleQuery(res, sql, query, fields, (rows) => {
            res.status(200).send(JSON.stringify(rows));
            sql.release();
        });
    });
}

const badParam = (param) => {
    return (!param || param === null || param === "null" || param === "undefined");
}

module.exports = function routes(app, logger) {

    app.get('/', (req, res) => {
        res.status(200).send('This is the port for the API. Go to port 3000 to view the web page.');
    });

    /********** User Routes **********/

    // GET All Users
    app.get('/user', (req, res) => {
        returnQuery(res, 'SELECT * FROM UserTable');
    });

    // GET UserId via Username (Links UserId to User)
    app.get('/getUserId', (req, res) => {
        let username = req.query.username;
        returnQuery(res, 'SELECT * FROM UserTable where username = (?)', username);
    });

    // Register a new User (Checks if user already exists)
    app.post('/register', (req, res) => {
        connect(res, (sql) => {
            let username = req.query.username;
            let password = req.query.password;
            let email = req.query.email;
            let usertype = req.query.usertype;
            let userId;

            if(!username || !password || !email || !usertype || usertype <= 0) {
                res.status(400).send('Invalid credentials');
                return;
            }
            if(username.length < 5) {
                res.status(400).send('Username is too short');
                return;
            }
            if(password.length < 5) {
                res.status(400).send('Password is too short');
                return;
            }

            simpleQuery(res, sql, 'SELECT * FROM UserTable where username = (?)', username, (rows) => {
                if (rows.length > 0) {
                    sql.release();
                    res.status(400).send("Username already exists");
                }
                else {
                    simpleQuery(res, sql, 'INSERT INTO UserTable(username, password, email, userType) VALUES (?,?,?,?)', [username, password, email, usertype], (rows) => {
                        if (usertype >= 3) { // If they're a supplier resolve.
                            sql.release();
                            res.status(200).send("Registered account successfully");
                        }
                    });
                }
            });
        });
    });     
    
     // GET Logins in a User (Checks password and if account exists)
     app.get('/login', (req, res) => {
        connect(res, (sql) => {
            let username = req.query.username;
            let password = req.query.password;

            if(!username || !password) {
                res.status(400).send('Invalid username or password');
                return;
            }
            simpleQuery(res, sql, 'SELECT * FROM UserTable where username = ?', username, (rows) => {
                sql.release();
                if(rows.length === 0) {
                    res.status(400).send('Username does not exist');
                } 
                else {
                    if(password === rows[0].password) {
                        res.status(200).send(rows[0]);
                    } 
                    else {
                        res.status(400).send('Incorrect password');
                    }
                }
            });
        });
    });

    // GET User via UserId 
    app.get('/user/:userId', (req, res) => {
        let userId = req.param("userId");
        returnQuery(res, 'SELECT * FROM UserTable WHERE userId = (?)', userId);
    });

    // UPDATE User via UserId 
    app.put('/user/:userId', (req, res) => {
        let query = 'UPDATE UserTable SET username = (?), password = (?), userType = (?), WHERE userId = (?)';
        let userId = req.param('userId');
        let rq = req.query;
        let fields = [rq.username, rq.password, rq.userType, userId];
        returnQuery(res, query, fields);
    }); 
    
    // DELETE User via userId 
    app.delete('/user/:userId', (req, res) => {
        let userId = req.param('userId');
        connect(res, (sql) => {
            simpleQuery(res, sql, 'DELETE FROM UserTable WHERE userID = (?)', userId, (rows) => {
                sql.release();
                res.status(200).send("Deleted User: " + userId);
            });
        });
    });

    /********** Discussion Board Routes **********/
}