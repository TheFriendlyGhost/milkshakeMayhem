CREATE DATABASE milkshake_db;
USE milkshake_db;

CREATE TABLE milkshakes
(
	id int NOT NULL AUTO_INCREMENT,
	milkshake_name varchar(255) NOT NULL,
	drank BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
