DROP DATABASE IF EXISTS rpg_db;

CREATE DATABASE rpg_db;

USE rpg_db;


CREATE TABLE user (

    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)

);

CREATE TABLE 3_spell (

    id INT NOT NULL, 
    name VARCHAR(50) NOT NULL,
    mana_cost INT,
    damage INT,
    PRIMARY KEY (id)


);

CREATE TABLE 2_spell (

    id INT NOT NULL, 
    name VARCHAR(50) NOT NULL,
    mana_cost INT,
    damage INT,
    PRIMARY KEY (id)


);

CREATE TABLE 1_spell (

    id INT NOT NULL, 
    name VARCHAR(50) NOT NULL,
    mana_cost INT,
    damage INT,
    PRIMARY KEY (id)


);

CREATE TABLE armor (

    id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    bonus_def INT NOT NULL,
    lvl_req INT NOT NULL,
    PRIMARY KEY (id)

);

CREATE TABLE weapon (

    id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    bonus_atk INT NOT NULL,
    lvl_req INT NOT NULL,
    PRIMARY KEY (id)

);

CREATE TABLE class(

    id INT NOT NULL, 
    title VARCHAR(30) NOT NULL,
    bonus_hp INT,
    bonus_mana INT,
    PRIMARY KEY (id)

);

CREATE TABLE character(

    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (50) NOT NULL,
    level INT NOT NULL,
    base_hp INT NOT NULL,
    base_mana INT NOT NULL,
    base_atk INT NOT NULL,
    base_def INT NOT NULL,
    class_id INT NOT NULL,
    weapon_id INT NOT NULL,
    armor_id INT NOT NULL,
    spell_1 INT NOT NULL,
    spell_2 INT NOT NULL,
    spell_3 INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (class_id) REFERENCES class(id),
    FOREIGN KEY (weapon_id) REFERENCES weapon(id),
    FOREIGN KEY (armor_id) REFERENCES armor(id),
    FOREIGN KEY (spell_1) REFERENCES 1_spell(id),
    FOREIGN KEY (spell_2) REFERENCES 2_spell(id),
    FOREIGN KEY (spell_3) REFERENCES 3_spell(id)

);
