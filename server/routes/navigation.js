const express = require("express");
const router = express.Router();
const path = require("path");
const verifyToken = require('../middleware/authMiddleware');


router.get('/',(req, res) => {
    res.render("index");
});

router.get('/css/styles.css', (req, res) => { 
    res.sendFile(path.resolve('./css/styles.css')); 
});

router.get('/home',(req, res) => {
    res.render("index");
});

router.get('/servicios',verifyToken,(req, res) => {
    const num = 0;
    res.render("servicios",num);
});

router.get('/servicios/usuario',verifyToken,(req, res) => {
    res.render("misServicios");
});

router.get('/servicios/info/:servicioId',verifyToken,(req, res) => {
    const serviceId  = req.params.servicioId;
    console.log(serviceId);
    res.render("infoServicio", {servicioId: serviceId});
});

router.get('/nuevo',verifyToken,(req, res) => {
    res.render("crear");
});

router.get('/editar/:servicioId',verifyToken,(req, res) => {
    const serviceId  = req.params.servicioId;
    res.render("editar",{servicioId: serviceId});
});

router.get('/currentUser',verifyToken,(req, res) => {
    console.log(req.userId);
    res.json(req.userId);
});


router.get('/faq',(req, res) => {
    res.render("faq");
});

module.exports = router;