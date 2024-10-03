const express = require('express');
const sequelize = require('./config/database')
const userRoutes = require('./routes/userRotes');

const app = express();
const port = 3003;

app.use(express.json());
app.use(userRoutes);

sequelize.authenticate()
  .then(() => console.log('Conectado ao banco de dados!'))
  .catch(err => console.error('Erro ao conectar', err));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});