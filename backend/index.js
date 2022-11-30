const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/user' );
const channelRoutes = require('./routes/channel' );
const postRoutes = require('./routes/post' );
const commentRoutes = require('./routes/comment' );
const sessionRoutes = require('./routes/session' );
const registerRoutes  = require('./routes/register' );
const { authenticateJWT , authenticateWithClaims  } = require('./middleware/auth' );
const { createModelsMiddleware  } = require('./middleware/model-middleware' );
const loggingMiddleware = require("./middleware/logging-middleware")
const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());
app.use(createModelsMiddleware );
app.use(loggingMiddleware);
app.get('/health', (request, response, next) => {
  const responseBody = { status: 'up', port };
  response.json(responseBody);
  next();
});
app.use('/session', sessionRoutes);
app.use('/user', usersRoutes);
app.use('/channel', channelRoutes);
app.use('/post', postRoutes);
app.use('/comment', commentRoutes);
app.use('/register', registerRoutes);
app.listen(port, () => {
  console.log(`This app is listening on port  ${port}`);
});