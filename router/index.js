const express = require('express');
const router = express.Router();
const homeController = require('../Controllers/Frontend/public/homeController');

module.exports = function () {

    router.get('/', homeController.home);
    router.get('/iniciar-sesion', homeController.iniciarSesion);
    router.post('/iniciar-sesion', homeController.iniciarSesionDemo);
    router.get('/sobre-nosotros', homeController.About);
    router.get('/service', homeController.service);
    router.get('/service/conciliacion', homeController.serviceConciliacion);
    router.get('/service/arbitraje', homeController.ServiceArbitraje);
    router.get('/contactos', homeController.Contactos);
    router.post('/enviar', homeController.enviarContacto);
    router.get('/noticias', homeController.NoticiasVista);
    router.get('/noticias/:id', homeController.noticiaDetail);
    router.get('/blogs', homeController.Blogs);
    router.get('/eventos', homeController.Eventos);
    router.get('/eventos/:id', homeController.eventoDetail);

    return router;
};
