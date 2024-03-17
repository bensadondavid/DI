CREATE TABLE students (
 id SERIAL PRIMARY KEY, 
	last_name VARCHAR(100),
	first_name VARCHAR(100),
	birth_date DATE
);

INSERT INTO students (last_name, first_name, birth_date) VALUES
('Marc', 'Benichou', '1998-02-11'), 
('Yoan', 'Cohen', '2010-03-12'), 
('Lea', 'Benichou', '1987-07-27'), 
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'), 
('Omer', 'Simpson', '1980-10-03'),
('David', 'Bensadon', '2000-01-20'); -- Assurez-vous que la date est au format YYYY-MM-DD

SELECT first_name, last_name FROM students;
SELECT first_name, last_name FROM students where id = 2
SELECT first_name, last_name FROM students where first_name = 'Marc' or last_name = 'Benichou';
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';
SELECT first_name, last_name FROM students WHERE first_name LIKE 'a%';
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_%';
SELECT first_name, last_name FROM students WHERE id IN (1, 3);
SELECT first_name, last_name FROM students WHERE birth_date >= '2000-01-01';



