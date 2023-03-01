DROP DATABASE IF EXISTS BD_ROULETTE;
CREATE DATABASE BD_ROULETTE CHARACTER SET utf8;

USE BD_ROULETTE;

CREATE USER IF NOT EXISTS 'Roulette'@'localhost' IDENTIFIED BY 'roulette';
GRANT ALL PRIVILEGES ON *.* TO 'Roulette'@'localhost';

CREATE TABLE Eleve
(
    nom_Eleve                VARCHAR(20),
    prenom_Eleve             VARCHAR(20),
    classe                   VARCHAR(20),

    idEleve                  INTEGER(150) NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (idEleve)
);

CREATE TABLE Note
(
    date_Note                DATE,
    nom_Note                 VARCHAR(20),
    resultat_Note            FLOAT,
    absence                  BOOLEAN,

    idNote                   INTEGER(150) NOT NULL AUTO_INCREMENT,
    idEleve                  INTEGER(150) NOT NULL,

    FOREIGN KEY (idELeve) REFERENCES Eleve(idEleve) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY (idNote)
);

INSERT INTO Eleve (nom_Eleve,prenom_Eleve,classe)
VALUES
    ("DECHAPPE","GAETAN","SLAM"),
    ("COLLARD","THIBAULT","SLAM"),
    ("SCHMITT","THOMAS","SLAM"),
    ("HUBERT","LEA","SLAM"),
    ("SARAZIN","KAREN","SLAM"),
    ("TEXEIRA","RYAN","SLAM"),
    ("HUREAUX","SAMUEL","SLAM"),
    ("SACCO","MATHÉO","SLAM"),
    ("LAMABINET","THEO","SLAM"),
    ("GOUVERNEUR","THEO","SLAM"),
    ("SOHIER","ENZO","SISR"),
    ("SAUVAGE","GUILLAUME","SISR"),
    ("TEST","TEST","TEST");