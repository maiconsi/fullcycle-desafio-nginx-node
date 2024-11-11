CREATE DATABASE fullcycle CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'fullcycle'@'%' IDENTIFIED WITH mysql_native_password BY 'secret';
GRANT ALL PRIVILEGES ON dmip.* TO 'fullcycle'@'%';
flush privileges;

USE fullcycle;

CREATE TABLE people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);