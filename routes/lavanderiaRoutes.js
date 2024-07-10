const express = require('express');
const router = express.Router();
const lavanderiaController = require('../controllers/lavanderiacontroller');

// Rutas para usuarios
router.get('/lavanderia', lavanderiaController.list);
router.post('/lavanderia', lavanderiaController.create);
router.get('/lavanderia/:id', lavanderiaController.getById);
router.put('/lavanderia/:id', lavanderiaController.update);
router.delete('/lavanderia/:id', lavanderiaController.delete);

module.exports = router;