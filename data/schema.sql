DROP TABLE IF EXISTS food;

CREATE TABLE food(
    id SERIAL PRIMARY KEY ,
    cal VARCHAR (255),
    prot VARCHAR (255),
    fat VARCHAR (255) ,
    carb VARCHAR (255),
    meals text
);

DROP TABLE IF EXISTS machine;

CREATE TABLE machine(
    id SERIAL PRIMARY KEY ,
    machine VARCHAR (255),
    catagory VARCHAR (255),
    url VARCHAR (255)
);

