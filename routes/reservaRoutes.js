const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservacontroller');

// Rutas para usuarios
router.get('/reserva', reservaController.list);
router.post('/reserva', reservaController.create);
router.get('/reserva/:id', reservaController.getById);
router.put('/reserva/:id', reservaController.update);
router.delete('/reserva/:id', reservaController.delete);

module.exports = router;

