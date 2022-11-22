const jwt = require('jsonwebtoken' );
const User = require('../models/user' );
const accessTokenSecret  = 'mysupercoolsecret' ;
const authUser  = async (username, pword) => {
   const user = await User.authenticateUser (username, pword);
   if (user === null) {
       return user;
   }
   const users = await User.fetchUsersByName (username);
   console.log('users', users);
   const accessToken = jwt.sign({ ...users[0], claims: ['user'] }, accessTokenSecret );
   return accessToken;
  
}
module.exports = {
   authUser
};