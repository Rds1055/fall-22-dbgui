const connectToDatabase = require('../models/db-helper');
const User = require('../models/user');
const Channel = require('../models/channel');
const Post = require('../models/post');
const Comment = require('../models/comment');
const createModelsMiddleware = async (req, res, next) => {
   req.models = {
      user: User,
      channel: Channel,
      post: Post,
      comment: Comment
  }
  next();
 }
const disconnectFromDatababaseMiddleware = (req, res, next) => {
   console.log('Disconnecting from the database');
   req.disconnect();
   next();
}

module.exports = {
   createModelsMiddleware,
   disconnectFromDatababaseMiddleware
}
