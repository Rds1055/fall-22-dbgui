const connectToDatabase = require('../models/database-helpers.js');
const User = require('../models/user');
const Channel = require('../models/channels');
const Comment = require('../models/comments');
//const Movie = require('../models/movies');
const Post = require('../models/posts');

/**
 * This middleware function is meant to be registered BEFORE the route handlers (see index.js)
 * This sets up a connection to the database. We modify the request object by tacking on the
 * models and disconnect function. Any FUTURE middleware / route handler thus has access to
 * those models / disconnect function by virtue of the fact that the request object is the same
 * one through the whole chain
 */
 const createModelsMiddleware = async (req, res, next) => {
    const { DBQuery, disconnect } = await connectToDatabase();
    req.models = {
        user: new User(DBQuery, disconnect),
        channel: new Channel(DBQuery, disconnect),
        comment: new Comment(DBQuery, disconnect),
        //movie: new Movie(DBQuery, disconnect),
        post: new Post(DBQuery, disconnect)
    }
    req.disconnect = disconnect;
    next();
}

const disconnectFromDatababaseMiddleware = (req, res, next) => {
    console.log('Disconnecting from the database');
    req.disconnect();
    next();
}

// Log a request
const requestLogMiddleware = (req, res, next) => {
    // Get the type of request
    const method = req.method;
    // Get the request link
    const url = req.protocol + "://" + req.get("host") + req.originalUrl;
    // Get the timestamp
    const timestamp = Date.now();
    // Previous variables
    console.log(method, url, timestamp);
    next();
}

module.exports = {
    createModelsMiddleware,
    disconnectFromDatababaseMiddleware,
    requestLogMiddleware
}