DROP TABLE IF EXISTS exercises;

CREATE TABLE exercies(
    id SERIAL PRIMARY KEY ,
    clientName VARCHAR(255),
    width VARCHAR(255),
    hight VARCHAR(255) ,
    exercise VARCHAR(255)
   
);

DROP TABLE IF EXISTS foodPrograms ;

CREATE TABLE foodPrograms (
id SERIAL PRIMARY KEY ,
clientName VARCHAR(255),
    width VARCHAR(255),
    hight VARCHAR(255) ,
    foodProgram VARCHAR(255)
);