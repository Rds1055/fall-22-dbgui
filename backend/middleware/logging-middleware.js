// Log a request
const requestLogMiddleware = (req, res, next) => {
    // Grab the type of request
    const method = req.method;
    // Grab the request link
    const url = req.protocol + "://" + req.get("host") + req.originalUrl;
    // Grab the timestamp
    const timestamp = Date.now();
    // Previous variables
    console.log(method, url, timestamp);
    next();
}

module.exports = requestLogMiddleware;