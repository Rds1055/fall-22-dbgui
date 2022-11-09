class channels {
    constructor(DBQuery, disconnect) {
        this.DBQuery = DBQuery;
        this.disconnect = disconnect;
    }

    close () {
        this.disconnect();
    }

    async createChannel(body) {
        const id = body.ID;
        const name = body.channelName;
        const movie = body.movieTitle;
        
        let result;
        if (id === undefined) {
            result = await this.DBQuery("INSERT INTO Channel(ID, channelName, movieTitle) VALUES (?,?,?)", [id, name, movie]);
        } else {
            result = await this.DBQuery("INSERT INTO Channel(ID, channelName, movieTitle) VALUES (?, ?,?)", [id, name, movie]);
        }
        const newRecord = await this.DBQuery("SELECT * FROM Channel WHERE ID = ?", [result.insertId]);
        return newRecord;
    }

    async getAllChannels() {
        const results = await this.DBQuery("SELECT * FROM Channel");
        return results;
    }

    async getById(id) {
        const results = await this.DBQuery("SELECT * FROM Channel WHERE ID = ?", [id]);
        return results;
    }

    async getByName(name) {
        const results = await this.DBQuery("SELECT * FROM Channel WHERE channelName = ?", [name]);
        return results;
    }

    async getByMovie(movie) {
        const results = await this.DBQuery("SELECT * FROM Channel WHERE movieTitle = ?", [movie]);
        return results;
    }

    async updateChannel(id, body) {
        const id = body.ID;
        const channelName = body.channelName;
        const movieTitle = body.movieTitle;
        const summary = body.summary;

        if (id !== undefined) {
            this.updateName(id, channelName);
        }
        if (movieTitle !== undefined) {
            this.updateMovie(id, movieTitle);
        }
        if (summary !== undefined) {
            this.updateSummary(id, summary);
        }
        const newRecord = await this.DBQuery("SELECT * FROM Channel WHERE ID = ?", [id]);
        return newRecord;
    };

    async updateName(id, channelName) {
        const result = await this.DBQuery("UPDATE Channel SET channelName = ? WHERE ID = ?", [channelName, id]);
    };
    
    async updateMovie(id, movieTitle) {
        const result = await this.DBQuery("UPDATE Channel SET movieTitle = ? WHERE ID = ?", [movieTitle, id]);
    };
    
    async updateSummary(id, summary) {
        const result = await this.DBQuery("UPDATE Channel SET summary = ? WHERE ID = ?", [summary, id]);
    };
}

module.exports = channels;