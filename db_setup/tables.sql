-- det h�r �r liksom basen. nu kan anv�ndaren ha recept. du beh�ver inte skriva av EXAKT vad jag s�ger

CREATE TABLE Users
(
	username VARCHAR(20),
	password TEXT,
	email TEXT,
	PRIMARY KEY (username)
);

CREATE TABLE Recipes
(
	id INT NOT NULL AUTO_INCREMENT,
	name TEXT,
	description TEXT,
	ingredients TEXT,
	PRIMARY KEY (id)
	-- also include picture somehow
);

CREATE TABLE CreatedBy
(
	username VARCHAR (20),
	id INT,
	FOREIGN KEY (username) REFERENCES Users(username),
	FOREIGN KEY (id) REFERENCES Recipes(id)
);