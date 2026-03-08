const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// CONEXIÓN A MYSQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',          // tu contraseña XAMPP
  database: 'huellitas_db'
});

connection.connect(err => {
  if (err) console.error('Error DB:', err);
  else console.log('Conectado a MySQL');
});

// MASCOTAS
app.get('/api/mascotas', (req, res) => {
  connection.query('SELECT * FROM mascotas', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.post('/api/mascotas', (req, res) => {
  const { nombre, raza, edad } = req.body;
  console.log('Agregar mascota:', req.body);
  connection.query('INSERT INTO mascotas (nombre, raza, edad) VALUES (?, ?, ?)', [nombre, raza, edad], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Mascota agregada', id: results.insertId });
  });
});

app.put('/api/mascotas/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, raza, edad } = req.body;
  connection.query('UPDATE mascotas SET nombre=?, raza=?, edad=? WHERE id=?', [nombre, raza, edad, id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Mascota actualizada' });
  });
});

// ADOPTANTES
app.get('/api/adoptantes', (req, res) => {
  connection.query('SELECT * FROM adoptantes', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.post('/api/adoptantes', (req, res) => {
  const { nombre, telefono } = req.body;
  console.log('Agregar adoptante:', req.body);
  connection.query('INSERT INTO adoptantes (nombre, telefono) VALUES (?, ?)', [nombre, telefono], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Adoptante agregado', id: results.insertId });
  });
});

app.put('/api/adoptantes/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, telefono } = req.body;
  connection.query('UPDATE adoptantes SET nombre=?, telefono=? WHERE id=?', [nombre, telefono, id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Adoptante actualizado' });
  });
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));