CREATE DATABASE task_list_ebytr;

USE task_list_ebytr ;

CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(100),
	password VARCHAR(100),
);

CREATE TABLE IF NOT EXISTS task_list_1 (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	task VARCHAR(255) NOT NULL,
  status VARCHAR(20) NOT NULL,
	data DATETIME,
);

CREATE TABLE IF NOT EXISTS task_list_2 (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	task VARCHAR(255) NOT NULL,
  status VARCHAR(20) NOT NULL,
	data DATETIME,
);

CREATE TABLE IF NOT EXISTS task_list_3 (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	task VARCHAR(255) NOT NULL,
  status VARCHAR(20) NOT NULL,
	date DATETIME,
);

INSERT INTO
	users (name, email, password)
VALUES
	('Joao Magno', 'magno@email.com', 'magnotasks10'),
	('Joao Vitor', 'vitor@email.com', 'vitortasks11'),
	('Joao Carini', 'carini@email.com', 'carinitasks12'),

INSERT INTO
	task_list_1 (task, status, date)
VALUES
	('organizar o banco de dados', 'pendente', GETDATE()),
	('configurar servidor', 'em andamento', GETDATE()),