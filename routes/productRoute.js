const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const {getProducts, getSingleProduct, createProduct, updateProduct, deleteProduct} = require('../Controllers/productController');;

router.get('/', getProducts);
router.get('/:id', getSingleProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router; 