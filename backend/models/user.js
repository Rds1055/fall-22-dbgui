const knex = require('../database/knex');
const bcrypt = require('bcrypt');
const USERS_TABLE = 'users';

const fetchAllUsers = async () => {
    const query = knex(USERS_TABLE);
    const results = await query;
    return results;
}
const fetchUsersByName = async (username) => {
    const query = knex(USERS_TABLE).where({ username });
    const results = await query;
    return results;
}
const updateUsername = async (username, user_id) => {
    const query = knex(USERS_TABLE).update({username}).where({user_id});
    const results = await query;
    return results;
}
const updatePassword = async (username, newPassword) => {
    const salt = await bcrypt.genSalt(10);
    const newHashedPassword = await bcrypt.hash(newPassword, salt);
    const query = knex(USERS_TABLE).update({pword:newHashedPassword}).where({username});
    const results = await query;
    return results;
}
const updateEmail = async (username, newEmail) => {
    const query = knex(USERS_TABLE).update({email:newEmail}).where({username});
    const results = await query;
    return results;
}
const createUser = async (username, email, pword) => {
    console.log('Raw password:', pword);
    const salt = await bcrypt.genSalt(10);
    console.log('Password salt', salt);
    const hashedPassword = await bcrypt.hash(pword, salt);
    console.log('Hashed password', hashedPassword);

    const query = knex(USERS_TABLE).insert({username, email, pword:hashedPassword});
    const results = await query;
    return results;
}
const deleteUser = async (user_id) => {
    const query = knex(USERS_TABLE).delete().where({user_id});
    const results = await query;
    return results;
}
const fetchUserByEmail = async (email) => {
const query = knex(USERS_TABLE).where({ email });
const result = await query;
return result;
}
const authenticateUser = async (email, pword) => {
    const users = await fetchUserByEmail(email);
    console.log('Results of users query', users);
    if (users.length === 0) {
        console.error(`No users matched the email: ${email}`);
        return null;
    }
    const user = users[0];
    const validPassword = await bcrypt.compare(pword, user.pword);
    if (validPassword) {
        delete user.pword;
        return user;
    }
    return null;
}
   module.exports = {
    fetchAllUsers,
    fetchUsersByName,
    createUser,
    updateUsername,
    updatePassword,
    updateEmail,
    deleteUser,
    fetchUserByEmail,
    authenticateUser
 }