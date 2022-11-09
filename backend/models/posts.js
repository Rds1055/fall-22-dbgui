const bcrypt = require("bcrypt");

class Post {
    // Constructor
    constructor(DBQuery, disconnect) {
        this.DBQuery = DBQuery;
        this.disconnect = disconnect;
    }

    // Disconnect from the database
    close () {
        this.disconnect();
    }

    async createNewPost(body) {
        const id = body.id;
        const poster = body.posterName;
        const text = body.text;
        const result = await this.DBQuery("INSERT INTO Post(id, posterName, text) VALUES (?, ?, ?)", [id, poster, text]);
        //this.updateUserData(username, body);
        //return this.findUserByUsername(username);
        return result;
    };

    async getAllPosts() {
        const result = await this.DBQuery("SELECT * FROM Post");
        return result;
    };

    async getByPosterName(poster) {
        const result = await this.DBQuery("SELECT * FROM Post WHERE posterName = ?", [poster]);
        return result;
    };

    // async authenticateUser(username, password) {
    //     const users = await this.getByUsername(username);
    //     if (users.length === 0) {
    //         console.error(`No users matched the username ${username}`);
    //         return false;
    //     }
    //     const user = users[0];
    //     const validPassword = await bcrypt.compare(password, user.password);
    //     return validPassword;
    // };

    async updateData(id, body) {
        const newtext = body.text;
        this.updateText(id, newtext);
        const newRecord = await this.DBQuery("SELECT * FROM Post WHERE id = ?", [id]);
        return newRecord;
    };

    async updateText(id, text) {
        const result = await this.DBQuery("UPDATE Post SET text = ? WHERE id = ?", [text, id]);
    };
}

module.exports = Post;