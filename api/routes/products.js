const expresss = require('express');
const router = expresss.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'You called products get request',
        method: 'GET'
    })
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        message: 'New product created!',
        createdProduct: product
    })
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    console.log(id);
    if (id == 'special') {
        res.status(200).json({
            message: 'You discoverd special Id',
            prodId: id
        })
    } else {
        res.status(201).json({
            message: 'You passed wrong id!'
        });
    }

});


router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!',
    })
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!',
    })
});

module.exports = router;