CREATE DATABASE movie_discussion;
DROP DATABASE movie_discussion;

CREATE TABLE User (
    username VARCHAR(30) PRIMARY KEY,
    password VARCHAR(60),
    email VARCHAR(30),
    usertype VARCHAR(30),
    userId integer
);

CREATE TABLE Channel (
    ID SERIAL PRIMARY KEY,
    channelName VARCHAR(30),
    movieTitle VARCHAR(30),--CONSTRAINT FOREIGN KEY--
    summary VARCHAR(2000)
);

CREATE TABLE Comment (
    ID SERIAL PRIMARY KEY,
    posterName VARCHAR(30),
    text VARCHAR(2000)

);

CREATE TABLE Post (
    ID SERIAL PRIMARY KEY,
    posterName VARCHAR(30),
    text VARCHAR(2000)
);