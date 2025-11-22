create table users(
    id serial primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    creted_at timestamp default current_timestamp
);

insert into users (name, email) values('Juan manuel', 'juan@test.com');
insert into users (name, email) values('Diego maradona', 'diego@test.com');
commit;