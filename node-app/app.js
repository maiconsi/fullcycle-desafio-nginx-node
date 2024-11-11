const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'mysql-db',
    user: 'root',
    password: 'root',
    database: 'fullcycle'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

app.get('/', (req, res) => {
    const name = `User${Math.floor(Math.random() * 1000)}`;
    connection.query(`INSERT INTO people(name) VALUES('${name}')`, (err) => {
        if (err) throw err;
        connection.query('SELECT name FROM people', (err, results) => {
            if (err) throw err;
            const namesList = results.map(row => `<li>${row.name}</li>`).join('');
            res.send(`<h1>Full Cycle Rocks!</h1><ul>${namesList}</ul>`);
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});