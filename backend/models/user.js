const bcrypt = require("bcrypt");

class User {
    // Constructor
    constructor(DBQuery, disconnect) {
        this.DBQuery = DBQuery;
        this.disconnect = disconnect;
    }

    // Disconnect from the database
    close () {
        this.disconnect();
    }

    async createNewUser(body) {
        const username = body.username;
        const password = body.password;
        const hashedPassword = bcrypt.hashSync(password, 10);
        const result = await this.DBQuery("INSERT INTO User(username, password) VALUES (?, ?)", [username, hashedPassword]);
        delete body.password;
        this.updateUserData(username, body);
        return this.findUserByUsername(username);
    };

    async getAllUsers() {
        const result = await this.DBQuery("SELECT * FROM User");
        return result;
    };

    async getByUsername(username) {
        const result = await this.DBQuery("SELECT * FROM User WHERE username = ?", [username]);
        return result;
    };

    async authenticateUser(username, password) {
        const users = await this.getByUsername(username);
        if (users.length === 0) {
            console.error(`No users matched the username ${username}`);
            return false;
        }
        const user = users[0];
        const validPassword = await bcrypt.compare(password, user.password);
        return validPassword;
    };

    async updateData(username, body) {
        const password = body.password;
        const email = body.email;
        const usertype = body.usertype;
        if (password !== undefined) {
            this.updatePassword(username, password);
        }
        if (email !== undefined) {
            this.updateEmail(username, email);
        }
        if (usertype !== undefined) {
            this.updateUserType(username, usertype);
        }
        const newRecord = await this.DBQuery("SELECT * FROM User WHERE username = ?", [username]);
        return newRecord;
    };

    async updatePassword(username, password) {
        const hashedPassword = bcrypt.hashSync(password, 10);
        const result = await this.DBQuery("UPDATE User SET password = ? WHERE username = ?", [hashedPassword, username]);
    };
    
    async updateEmail(username, email) {
        const results = await this.DBQuery("UPDATE User SET email = ? WHERE username = ?", [email, username]);
    };
    
    async updateUserType(username, usertype) {
        const results = await this.DBQuery("UPDATE User SET phone = ? WHERE username = ?", [usertype, username]);
    };
}

module.exports = User;