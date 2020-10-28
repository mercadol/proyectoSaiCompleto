'use strict'

var express = require('express');
var PersonaController  = require('../controllers/persona');

var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/personas'});

//rutas de pruebas

router.get('/test-de-controlador', PersonaController.test);

// Rutas Utilez
//router.post('/save', PersonaController.save);
//router.get('/personas/:last?', PersonaController.getPersonas);
//router.get('/persona/:id', PersonaController.getPersona);
//router.put('/persona/:id', PersonaController.update);
//router.delete('/persona/:id', PersonaController.delete);
//router.post('/upload-image/:id?', md_upload, PersonaController.upload);
//router.get('/get-image/:image', PersonaController.getImage);
//router.get('/search/:search', PersonaController.search);
module.exports = router;
