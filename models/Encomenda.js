const mongoose = require('mongoose');

const EncomendaSchema = new mongoose.Schema({
    codigo_barras: {type: String, required: true, unique: true},
    nome: {type: String, required: true},
    bloco: {type: String, required: true},
    unidade: {type: String, required: true},
    retirado: {type: Boolean, default: false},
    data_recebido: {type: Date, default: Date.now},
    nome_retirado: {type: String},
    data_retirado: Date
}, {
    timestamps: true // Adiciona createdAt e updatedAt automaticamente
});

EncomendaSchema.index({ codigo_barras: 1 }); // Índice para consultas rápidas

module.exports = mongoose.model('Encomenda', EncomendaSchema);
