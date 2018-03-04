-- restaurants database schema
CREATE DATABASE restaurants_DB;
USE restaurants_DB;

CREATE TABLE restaurants
(
	id INT NOT NULL AUTO_INCREMENT,
	restaurant VARCHAR(100) NOT NULL,
	visited BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


--JAWS database schema
CREATE TABLE restaurants (
	id INT AUTO_INCREMENT NOT NULL,
    restaurant VARCHAR(100) NOT NULL,
	visited BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);