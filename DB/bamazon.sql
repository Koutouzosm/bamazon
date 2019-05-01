DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("toothbrush", "hygiene", 3.00, 50);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("deodorant", "hygiene", 4.00, 45);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("mouthwash", "hygiene", 4.50, 65);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("usb cable", "electronics", 1.50, 35);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("6' HDMI", "electronics", 15.00, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("usb c", "electronics", 5.00, 35);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("pencils 10pc", "stationary", 2.00, 150);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("notepads", "stationary", 4.35, 50);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("white-out", "stationary", 4.90, 35);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("windex", "cleaning", 7.00, 45);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("bleach", "cleaning", 8.00, 18);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("sponges 3pk", "cleaning", 3.95, 11);