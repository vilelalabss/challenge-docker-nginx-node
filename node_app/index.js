const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)
connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao MySQL');
  });

app.get('/', (req, res) => {
    connection.query('SELECT * FROM people', (err, rows) => {
        if (err) throw err;
        console.log(rows);
        res.send("<h1>Full Cycle Rocks!</h1>" + rows.map(x => x.id + " - " + x.name));
      });
});

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});