CREATE DATABASE movie_discussion;
DROP DATABASE movie_discussion;

CREATE TABLE User (
    username VARCHAR(30) PRIMARY KEY,
    password VARCHAR(60),
    email VARCHAR(30),
    IS_ADMIN BOOLEAN DEFAULT FALSE
);

CREATE TABLE Channel (
    ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    channelName VARCHAR(30),
    movieTitle VARCHAR(30),
    summary VARCHAR(100000)
);

CREATE TABLE Comment (
    ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    posterName VARCHAR(30),
    text VARCHAR(2000)
    postID integer,
    postID FOREIGN KEY (postID)
    REFERENCES Post(ID)
);

CREATE TABLE Post (
    ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    posterName VARCHAR(30),
    text VARCHAR(100000),
    channelID integer,
    channelID FOREIGN KEY (channelID)
    REFERENCES Channel(ID)
);