# Recipie
This is a wep-application created for the course DAT076/DIT126

#Overwiev
The app is server side MVC-based. It uses Node.js together with Express in the backend and React.js in the frontend.
It uses Jquery ajax for communication between the client and the server and sequalize between the server and the database. The database is written in MySQL. 

#How to run
clone repository 

in /frontend/recept-react-app npm install

in /backend/recept_rest npm install

start mysql database

run npm start in both directories and visit localhost:3000

#Database
log in as root (without password)

mysql -u root

create database pie;
use pie;

If you have password for your mysql root, you need to modify backend/recept_rest/config/config.json.
Replace the empty password field with your root password.

"development": {
  "username": "root",
  "password": "<your root password goes here>",
  "database": "pie",
  "host": "127.0.0.1",
  "dialect": "mysql"
 }

