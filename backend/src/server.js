require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3001; // Usa a porta do .env ou 3001 como padrão

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
