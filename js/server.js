const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'calculadora'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL');
});

app.post('/salvar', (req, res) => {
  const { peso, altura } = req.body;
  const horaClick = new Date().toISOString().slice(0, 19).replace('T', ' ');

  const query = 'INSERT INTO imc (peso, altura, horaClick) VALUES (?, ?, ?)';
  db.query(query, [peso, altura, horaClick], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      res.status(500).send('Erro ao inserir dados');
    } else {
      res.send('Dados inseridos com sucesso');
    }
  });
});


app.get('/dados-banco', (req, res) => {
  const sql = 'SELECT * FROM imc';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Erro ao buscar dados:', err);
      return res.status(500).json({ error: 'Erro interno ao buscar dados' });
    }
    res.json(result);
  });
});


async function buscarDados() {
  try {
      const response = await fetch('http://localhost:3000/dados-banco');
      if (!response.ok) {
          throw new Error('Erro ao buscar dados');
      }
      
      const data = await response.json();
      console.log('Dados recebidos:', data);

      const dadosContainer = document.getElementById('dadosContainer');
      dadosContainer.innerHTML = '';
      
      data.forEach(item => {
          const div = document.createElement('div');
          div.textContent = `Peso: ${item.peso}, Altura: ${item.altura}, Horário do cálculo: ${item.horaClick}`;
          dadosContainer.appendChild(div);
      });
  } catch (error) {
      console.error('Erro ao buscar dados:', error);
  }
}


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});