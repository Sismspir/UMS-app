-- Create database
CREATE DATABASE react_crud;

-- Create users table
CREATE TABLE `react_crud`.`users`
(
    `id` int NOT NULL auto_increment,
    `name` varchar(50),
    `username` varchar(60),
    `pass` VARCHAR(255),
    `email` varchar(50),
    `created_at` timestamp,
    `updated_at` timestamp, PRIMARY KEY (id)
);
