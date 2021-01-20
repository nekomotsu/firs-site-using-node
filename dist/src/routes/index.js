const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index', {saludo: 'hola hdlv soy nekomotsu'});
});

router.get('/tierlist', (req, res)=>{
    res.render('tierlist');
});

router.get('/topdecks', (req, res)=>{
    res.render('topdecks');
});

router.get('/torneos', (req, res)=>{
    res.render('comoParticipar');
});

module.exports = router;