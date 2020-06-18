const express = require('express');
const router = express.Router()
let {postProduct, getProduct, getSingleProduct, deleteProduct,updateProduct} = require('../controllers/productCntrl')

router.post('/', postProduct);
router.get('/',getProduct);
router.get('/:id',getSingleProduct);
router.get('/delete/:id', deleteProduct);
router.post('/:id', updateProduct);

module.exports = router;