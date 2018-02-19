CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burgers_name varchar(255) NOT NULL,
    devoured tinyint DEFAULT 0 not null,
	PRIMARY KEY (id)
);