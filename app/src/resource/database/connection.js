const mysql = require('mysql');

// Configurações de conexão com o MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: ''
});

// Conectar ao MySQL
connection.connect((error) => {
  if (error) {
    console.error('Erro ao conectar ao MySQL:', error);
    return;
  }
  console.log('Conexão bem-sucedida com o MySQL');
});

// Executar consultas SQL
connection.query('SELECT * FROM sua_tabela', (error, results, fields) => {
  if (error) {
    console.error('Erro ao executar consulta:', error);
    return;
  }
  console.log('Resultado da consulta:', results);
});

// Fechar a conexão com o MySQL ao finalizar a aplicação
// connection.end();
