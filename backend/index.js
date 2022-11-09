const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import route handlers
const userRoutes = require('./routes/user');
const channelRoutes = require('./routes/channels');
const commentRoutes = require("./routes/comments");
const postRoutes = require("./routes/posts");
const sessionRoutes = require("./routes/session");

// Import middleware
const middleware = require("./middleware/model-middleware");

// Define the express app instance
const app = express();
const port = 3001;

// First step in the "middleware chain".
// This is first because we know the route handlers need connections
// to the database
app.use(cors());
app.use(middleware.createModelsMiddleware);
app.use(middleware.requestLogMiddleware);
app.use(bodyParser.json());

// Health route
app.get('/health', (request, response, next) => {
    const responseBody = { status: 'up', port };
    response.json(responseBody);
    // Continue through the middleware chain
    next();
});

app.use('/session', sessionRoutes);

// Any route that starts with /users
app.use('/user', userRoutes);
app.use("/channels", channelRoutes);
app.use("/comments", commentRoutes);
app.use("/posts", postRoutes);

// Listen for incoming requests
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});