const express = require("express");
const router = express.Router();
const path = require("path");
const verifyToken = require('../middleware/authMiddleware');


router.get('/',(req, res) => {
    res.sendFile(path.resolve('./index.html'));
});

router.get('/css/styles.css', (req, res) => { 
    res.sendFile(path.resolve('./css/styles.css')); 
});

router.get('/home',(req, res) => {
    res.sendFile(path.resolve('./index.html'));
});

router.get('/servicios',verifyToken,(req, res) => {
    res.sendFile(path.resolve('./servicios.html'));
});

router.get('/servicios/usuario',verifyToken,(req, res) => {
    res.sendFile(path.resolve('./misServicios.html'));
});

router.get('/nuevo',verifyToken,(req, res) => {
    res.sendFile(path.resolve('./crear.html'));
});

router.get('/currentUser',verifyToken,(req, res) => {
    console.log(req.userId);
    res.json(req.userId);
});


router.get('/faq',(req, res) => {
    res.sendFile(path.resolve('./faq.html'));
});

module.exports = router;