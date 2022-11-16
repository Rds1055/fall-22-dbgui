const mysql = require('mysql');
const DBConnection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'frozenhorse',
   insecureAuth: true,
});
DBConnection.connect((err) => {
   if (err) {
       console.error('There was a problem connecting to the DB', err);
       return;
   }
   connectionSuccessHandler();
   createDatabase();
});
const connectionSuccessHandler = () => {
   console.log('Successful connection!');
}

const createDatabase = async () => {
    const util = require('util');
    const DBQuery = util.promisify(DBConnection.query).bind(DBConnection);
    try {
        const result = await DBQuery('CREATE DATABASE IF NOT EXISTS crystalball');
        console.log('Successfully recreated the DB');
    } catch (err) {
        console.error('There was a problem recreating the DB', err);
    }
    try {
        const useDatabaseQuery = `USE crystalball`;
        const usersTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                username VARCHAR(255),
                email VARCHAR(255),
                pword VARCHAR(255),
                is_admin BOOLEAN,
                user_since DATE
            )`;
        const moviesTableQuery = `
            CREATE TABLE IF NOT EXISTS movies (
                movie_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                movie_name VARCHAR(255),
                director VARCHAR(255),
                lead_actor VARCHAR(255),
                release_date DATE,
                is_verified BOOLEAN NOT NULL
            )`;
        const channelsTableQuery= `
            CREATE TABLE IF NOT EXISTS channels (
                channel_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                admin_id INT NOT NULL,
                movie_id INT NOT NULL,
                title VARCHAR(255) NOT NULL,
                num_posts INT NOT NULL DEFAULT 0,
                CONSTRAINT channel_has_admin_id FOREIGN KEY (admin_id) REFERENCES users(user_id),
                CONSTRAINT movie_has_id FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
            )`;
        const postsTableQuery = `
            CREATE TABLE IF NOT EXISTS posts (
                post_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                user_id INT NOT NULL,
                channel_id INT NOT NULL,
                title VARCHAR(255) NOT NULL,
                contents VARCHAR(1000) NOT NULL,
                likes INT NOT NULL,
                post_date DATE NOT NULL DEFAULT (CURRENT_TIMESTAMP),
                CONSTRAINT post_has_user FOREIGN KEY (user_id) REFERENCES users(user_id),
                CONSTRAINT post_has_channel FOREIGN KEY (channel_id) REFERENCES channels(channel_id)
            )`;
        const commentsTableQuery = `
            CREATE TABLE IF NOT EXISTS comments (
                comment_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                user_id INT NOT NULL,
                post_id INT NOT NULL,
                contents VARCHAR(500) NOT NULL,
                parent INT REFERENCES comments(comment_id),
                post_date DATE NOT NULL,
                CONSTRAINT comment_has_user FOREIGN KEY (user_id) REFERENCES users(user_id),
                CONSTRAINT comment_has_post FOREIGN KEY (post_id) REFERENCES posts(post_id)
            )`;

        
        await DBQuery(useDatabaseQuery);
        await DBQuery(usersTableQuery);
        await DBQuery(moviesTableQuery);
        await DBQuery(channelsTableQuery);
        await DBQuery(postsTableQuery);
        await DBQuery(commentsTableQuery);
        console.log('Successfully created tables in the DB');

        const insertUsersQuery = `
           INSERT INTO users(username, email, pword, is_admin, user_since)
           VALUES
           ('johndoe', 'email.mail.net', 'fakepassword', false, '2222/2/22')`;
        const insertUsersResult = await DBQuery(insertUsersQuery);
        console.log('Inserted user with a result:', insertUsersResult);
        const selectQueryResults = await DBQuery('SELECT * FROM users');
        console.log('Results of the select query', selectQueryResults);

        // const deleteUsers = await DBQuery('DELETE FROM users');
        // const deletePosts = await DBQuery('DELETE FROM posts');
        // const deleteChannels = await DBQuery('DELETE FROM channels');
        // const deleteComments = await DBQuery('DELETE FROM comments');
        // const deleteMovies = await DBQuery('DELETE FROM movies');

        // console.log('Successfully deleted the table users', deleteUsers);
        // console.log('Successfully deleted the table posts', deletePosts);
        // console.log('Successfully deleted the table channels', deleteChannels);
        // console.log('Successfully deleted the table comments', deleteComments);
        // console.log('Successfully deleted the table movies', deleteMovies);

        DBConnection.end()
     } catch (err) {
        console.error('Failed to create tables', err);
     }
 }