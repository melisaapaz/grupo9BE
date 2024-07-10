const express = require('express');
const router = express.Router();
const resenaController = require('../controllers/resenacontroller');

// Rutas para usuarios
router.get('/resena', resenaController.list);
router.post('/resena', resenaController.create);
router.get('/resena/:id', resenaController.getById);
router.put('/resena/:id', resenaController.update);
router.delete('/resena/:id', resenaController.delete);

module.exports = router;