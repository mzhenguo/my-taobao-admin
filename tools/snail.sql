create table books(
  id int not null auto_increment primary key,
  isbn varchar(20) not null,
  open_id varchar(50) not null,
  average float,
  author varchar(100),
  tags varchar(100),
  image varchar(100),
  alt varchar(100) not null,
  publisher varchar(100) not null,
  title varchar(100) not null,
  summary varchar(1000) not null,
  price varchar(100)
)
