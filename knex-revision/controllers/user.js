const jwt = require('jsonwebtoken' );
const User = require('../models/user' );
const accessTokenSecret  = 'mysupercoolsecret' ;
const authUser  = async (email, pword) => {
   const user = await User.authenticateUser (email, pword);
   if (user === null) {
       return user;
   }
   const users = await User.fetchUserByEmail (email);
   console.log('users', users);
   const accessToken = jwt.sign({ ...users[0], claims: ['user'] }, accessTokenSecret );
   return accessToken;
  
}
module.exports = {
   authUser
};