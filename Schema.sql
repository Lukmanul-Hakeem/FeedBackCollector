CREATE DATABASE FEEDBACK_DB;
USE FEEDBACK_DB;

CREATE TABLE UserFeedback (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    UserName VARCHAR(50) NOT NULL,
    Email VARCHAR(50) DEFAULT NULL,
    Message TEXT NOT NULL,
    SubmittedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO UserFeedback(UserName,Email,Message) 
VALUES ('Lukmanul Hakeem', 'lukman@example.com', 'Great project! The UI is clean and the functionality is well thought out.');