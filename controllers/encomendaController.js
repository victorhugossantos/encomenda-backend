const Encomenda = require('../models/Encomenda');

// Atualizar encomenda
exports.atualizarEncomenda = async (req, res) => {
    const { codigo_barras } = req.params;
    const { retirado, nome_retirado } = req.body;

    try {
        const encomenda = await Encomenda.findOne({ codigo_barras });
        if (!encomenda) return res.status(404).json({ error: 'Encomenda não encontrada' });

        encomenda.nome_retirado = nome_retirado || encomenda.nome_retirado;
        encomenda.retirado = retirado;
        encomenda.data_retirado = retirado ? new Date() : encomenda.data_retirado;

        await encomenda.save();
        res.json(encomenda);
    } catch (error) {
        console.error('Erro ao atualizar encomenda:', error);
        res.status(500).json({ error: `Erro ao atualizar encomenda: ${error.message}` });
    }
};

// Outras funções do controlador
exports.listarEncomendas = async (req, res) => {
    try {
        const encomendas = await Encomenda.find();
        res.json(encomendas);
    } catch (error) {
        res.status(500).json({ error: `Erro ao listar encomendas: ${error.message}` });
    }
};

exports.registrarEncomenda = async (req, res) => {
    try {
        const encomenda = new Encomenda(req.body);
        await encomenda.save();
        res.status(201).json(encomenda);
    } catch (error) {
        res.status(500).json({ error: `Erro ao registrar encomenda: ${error.message}` });
    }
};
