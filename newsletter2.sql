create table if not exists abonn (
id_abonn int(11) not null auto_increment,
email varchar(160) not null,
prenom varchar(160) not null,
nom varchar(160) not null,
PRIMARY KEY (id_abonn)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 ;