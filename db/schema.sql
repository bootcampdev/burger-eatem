### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

set sql_safe_updates = 0;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
