const express = require('express');
const router = express.Router();
const encomendaController = require('../controllers/encomendaController');

router.put('/:codigo_barras', encomendaController.atualizarEncomenda);

router.get('/', encomendaController.listarEncomendas);
router.post('/', encomendaController.registrarEncomenda);

module.exports = router;
