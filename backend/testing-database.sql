
CREATE database task_list_ebytr;

CREATE TABLE IF NOT EXISTS `task_list_ebytr`.users (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS `task_list_ebytr`.task_list_1 (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	task VARCHAR(255) NOT NULL,
  status VARCHAR(20) NOT NULL,
	date DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `task_list_ebytr`.task_list_2 (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	task VARCHAR(255) NOT NULL,
  status VARCHAR(20) NOT NULL,
	date DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `task_list_ebytr`.task_list_3 (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	task VARCHAR(255) NOT NULL,
  status VARCHAR(20) NOT NULL,
	date DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
	`task_list_ebytr`.users (name, email, password)
VALUES
	('Joao Magno', 'magno@email.com', 'magnotaskS#10'),
	('Joao Vitor', 'vitor@email.com', 'vitortaskS#11'),
	('Joao Carini', 'carini@email.com', 'carinitaskS#12');

INSERT INTO
	`task_list_ebytr`.task_list_1 (task, status, date)
VALUES
	('organizar o banco de dados', 'pendente', NOW()),
	('configurar servidor', 'em andamento', NOW());
    
INSERT INTO
	`task_list_ebytr`.task_list_2 (task, status, date)
VALUES
	('organizar o banco de dados', 'pendente', NOW()),
	('configurar servidor', 'em andamento', NOW());
    
INSERT INTO
	`task_list_ebytr`.task_list_3 (task, status, date)
VALUES
	('organizar o banco de dados', 'pendente', NOW()),
	('configurar servidor', 'em andamento', NOW());