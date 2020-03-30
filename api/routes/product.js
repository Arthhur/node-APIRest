const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/', productController.get_all_products);

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: "Handling GET REquest",
        id: id
    });
});

router.post('/', (req, res, next) => {
    for(const ops of Object.keys(req.body)) {
        console.log(ops);
    }
    const product = {
        name: req.body.name
    }
    res.status(201).json({
        message: "Handling POST REquest",
        product: product
    });
});

router.put('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: "Handling PUT REquest",
        id: id
    });
});

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: "Handling DELETE REquest",
        id: id
    });
});

module.exports = router ;