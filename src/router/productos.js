const {Router} = require('express');
const { obtenerProductos, crearProductos } = require('../controller/product');
const router = Router();


router.get('/', obtenerProductos);

router.post('/', crearProductos);

module.exports= router;
