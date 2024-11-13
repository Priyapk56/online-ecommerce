const express =require('express');
const { getProducts } = require('../controllers/productController');
const { getSingleProduct } = require('../controllers/productController');


const router = express.Router();

router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);


module.exports=router;