const express = require('express');
const jwt = require('jsonwebtoken');


const router = express.Router();

router.post('/signup', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET REquest"
    });
});

router.post('/login', (req, res, next) => {
    for(const ops of Object.keys(req.body)) {
        console.log(ops);
    }
    const user = {
        email: req.body.email,
        password: req.body.password
    }
    const token = jwt.sign(
        {
            email: req.body.email,
            id: 1
        },
        process.env.JWT_KEY,
        {
            expiresIn: '1h'
        }
    );
    res.status(201).json({
        message: "Auth successful",
        token: token
    });
});


module.exports = router ;