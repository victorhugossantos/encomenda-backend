const express = require('express');
const mongoose = require('mongoose');
const encomendaRoutes = require('./routes/encomendaRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do CORS
const cors = require('cors');
app.use(cors());

// Middleware para parsing JSON
app.use(express.json());

// Rotas
app.use('/encomendas', encomendaRoutes);

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar ao MongoDB: ', err));

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
