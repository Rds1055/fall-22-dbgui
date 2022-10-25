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
}