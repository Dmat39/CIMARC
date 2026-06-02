const { noticias, eventos, blogs } = require('../../../data/mockData');

const BASE = { isHome: true, isCliente: false, isJobs: false, isAdmin: false, isFooter: true };

exports.iniciarSesion = (req, res) => {
    res.render('iniciar-sesion', { layout: false, demo: false });
};

exports.iniciarSesionDemo = (req, res) => {
    res.render('iniciar-sesion', { layout: false, demo: true });
};

exports.home = (req, res) => {
    const ultimasNoticias = noticias.slice(0, 3);
    res.render('public/home', { ...BASE, ultimasNoticias });
};

exports.About = (req, res) => res.render('public/about', BASE);

exports.service = (req, res) => res.render('public/service', BASE);

exports.serviceConciliacion = (req, res) => res.render('public/service-conciliacion', BASE);

exports.ServiceArbitraje = (req, res) => res.render('public/service-arbitraje', BASE);

exports.Contactos = (req, res) => res.render('public/contacto', { ...BASE, mensajeEnviado: false });

exports.enviarContacto = (req, res) => res.render('public/contacto', { ...BASE, mensajeEnviado: true });

exports.NoticiasVista = (req, res) => res.render('public/noticias', { ...BASE, noticias });

exports.noticiaDetail = (req, res) => {
    const noticia = noticias.find(n => n.id === req.params.id);
    if (!noticia) return res.redirect('/noticias');
    res.render('public/noticia-detail', { ...BASE, noticia });
};

exports.Blogs = (req, res) => res.render('public/blogs', { ...BASE, blogs });

exports.Eventos = (req, res) => res.render('public/eventos', { ...BASE, eventos });

exports.eventoDetail = (req, res) => {
    const evento = eventos.find(e => e.id === req.params.id);
    if (!evento) return res.redirect('/eventos');
    res.render('public/evento-detail', { ...BASE, evento });
};
