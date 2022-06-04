CREATE database eth_net;
use eth_net;

CREATE TABLE IF NOT EXISTS train_log(
    idx INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    contract_addr VARCHAR(128) NOT NULL,
    user_addr VARCHAR(128) NOT NULL,
    param VARCHAR(10000) ,
    time DATE NOT NULL,
    tradehash VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS detech_log(
    idx INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    contract_addr VARCHAR(128) NOT NULL,
    user_addr VARCHAR(128) NOT NULL,
    param VARCHAR(10000) ,
    time DATE NOT NULL,
    tradehash VARCHAR(128) NOT NULL

);
