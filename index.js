const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./router');

const app = express();

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Variables globales para las vistas
app.use((req, res, next) => {
    res.locals.mensajes = [];
    res.locals.year = new Date().getFullYear();
    next();
});

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Rutas
app.use('/', routes());

// Puerto
const puerto = process.env.PORT || 5000;
app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});

module.exports = app;
