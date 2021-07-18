CREATE DATABASE if not exists company;

use company;
CREATE TABLE employee(
	id INT(11) NOT NULL auto_increment,    
    fullname VARCHAR(45) DEFAULT NULL,
    functionEmployee VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY(id)
);
DESCRIBE employee;

INSERT INTO employee values
	(1, 'Carlos Andres Gonzalez', 'Investigador'),
	(2, 'Gandhy David Amaya','Desarrollador'),
    (3, 'Andres David Salazar','Diseñador');

select * from employee;