const connection = require("../lib/connect");

const createUsersTable = `CREATE TABLE users (
    userId serial primary key,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    passwordHash VARCHAR(255) NOT NULL,
    creationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    bio TEXT,
    location VARCHAR(255)
)`;

const createTweetsTable = `CREATE TABLE tweets (
    tweetId serial primary key,
    userId INT,
    content VARCHAR(280),
    creationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

const insertUsers = `INSERT INTO users (username, email, passwordHash, bio, location)
VALUES
('JohnDoe', 'johndoe@example.com', 'hashedpassword1', 'I love coding', 'New York'),
('JaneDoe', 'janedoe@example.com', 'hashedpassword2', 'I love databases', 'San Fransisco')`;


const insertTweets = `INSERT INTO tweets (userId, content)
VALUES
('1', 'this is my first tweet'),
('1', 'this is my second tweet'),
('2', 'hello guys'),
('2', 'I love coding'),
('2', 'hellooo'),
('2', 'I love databases')`;




const printError = (msg) => (error) => {
    error && console.log(msg, error)
};

connection.connection

connection.query(createUsersTable, printError("Error creating users table"));
connection.query(createTweetsTable, printError("Error creating tweets table"));
connection.query(insertUsers, printError("Error inserting users"));

console.log("creation tables and inserting users done!");

connection.end;

