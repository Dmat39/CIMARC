const noticias = [
    {
        id: '1',
        titulo: 'CIMARC inaugura nuevo Centro de Conciliación en Cajamarca',
        descripcion: 'El Centro Internacional de Mediación, Arbitraje y Conciliación inauguró sus nuevas instalaciones para brindar un mejor servicio a la comunidad cajamarquina. Las nuevas instalaciones cuentan con salas de mediación modernas y equipadas con tecnología de punta para facilitar los procesos de conciliación, garantizando la confidencialidad y el confort de las partes involucradas.',
        fecha: '2026-05-15',
        categoria: 'Institucional',
        imagen: '/assets/images/banner/cimarc-banner-noticias.png',
        user: { email: 'admin@cimarc.com' }
    },
    {
        id: '2',
        titulo: 'Taller de Conciliación gratuito para empresas locales',
        descripcion: 'CIMARC ofrece talleres gratuitos de conciliación dirigidos a empresarios y emprendedores de la región Cajamarca. Aprende a resolver conflictos comerciales de manera rápida, económica y efectiva sin necesidad de recurrir a litigios judiciales. Los talleres se realizan todos los viernes en nuestras instalaciones.',
        fecha: '2026-05-10',
        categoria: 'Conciliación',
        imagen: '/assets/images/banner/conciliacion_.jpg',
        user: { email: 'admin@cimarc.com' }
    },
    {
        id: '3',
        titulo: 'Nuevo reglamento de arbitraje nacional aprobado',
        descripcion: 'El Ministerio de Justicia aprobó el nuevo reglamento que regula los procesos de arbitraje a nivel nacional, estableciendo plazos más cortos y procedimientos más transparentes para las partes involucradas en disputas comerciales y civiles. CIMARC ya se encuentra adaptado a la nueva normativa.',
        fecha: '2026-04-28',
        categoria: 'Legal',
        imagen: '/assets/images/banner/Arbitrios.jpg',
        user: { email: 'admin@cimarc.com' }
    },
    {
        id: '4',
        titulo: 'CIMARC capacita a nuevos conciliadores certificados',
        descripcion: 'Un grupo de 25 profesionales completó exitosamente el programa de certificación en conciliación extrajudicial de CIMARC. Los nuevos conciliadores están listos para atender casos en las áreas civil, familiar y comercial en la región, fortaleciendo el acceso a la justicia alternativa en Cajamarca.',
        fecha: '2026-04-20',
        categoria: 'Institucional',
        imagen: '/assets/images/banner/Perfil-Profesional-y-Perfil-Personal.jpg',
        user: { email: 'admin@cimarc.com' }
    }
];

const eventos = [
    {
        id: '1',
        titulo: 'Seminario Internacional de Arbitraje Comercial 2026',
        descripcion: 'Un evento de alto nivel académico y profesional donde expertos nacionales e internacionales compartirán las últimas tendencias en arbitraje comercial, nuevas tecnologías aplicadas al arbitraje y casos de éxito en América Latina.',
        ponentes: 'Dr. Carlos Mendoza\nDra. Ana Rivera\nDr. Luis Torres',
        fecha: '2026-06-15',
        categoria: 'Arbitraje',
        imagen: '/assets/images/banner/evento.png',
        calle: 'Jr. La Mar 493, Cajamarca',
        lat: '-7.162',
        lng: '-78.524',
        user: { email: 'admin@cimarc.com' }
    },
    
    {
        id: '3',
        titulo: 'Taller Práctico: Negociación y Mediación Empresarial',
        descripcion: 'Taller intensivo de dos días donde los participantes aprenderán técnicas avanzadas de negociación y mediación aplicadas al entorno empresarial. Se utilizarán casos reales y simulaciones para desarrollar habilidades prácticas en la resolución de conflictos.',
        ponentes: 'Coach María Quispe\nLic. Juan Campos',
        fecha: '2026-07-05',
        categoria: 'Taller',
        imagen: '/assets/images/component/abogado.jpg',
        calle: 'Jr. Del Comercio 250, Cajamarca',
        lat: '-7.155',
        lng: '-78.510',
        user: { email: 'admin@cimarc.com' }
    },
    {
        id: '4',
        titulo: 'Foro Regional de Conciliación Familiar',
        descripcion: 'Foro dedicado a la conciliación en materia familiar, abordando temas como pensión de alimentos, régimen de visitas, divorcio por mutuo acuerdo y otros conflictos familiares que pueden resolverse de manera amigable y con menor costo emocional.',
        ponentes: 'Psic. Elena Castillo\nAb. Marco Díaz',
        fecha: '2026-07-18',
        categoria: 'Conciliación',
        imagen: '/assets/images/component/figuraservicios.jpg',
        calle: 'Jr. La Mar 493, Cajamarca',
        lat: '-7.162',
        lng: '-78.524',
        user: { email: 'admin@cimarc.com' }
    }
];

const blogs = [
    {
        id: '1',
        titulo: '¿Qué es la conciliación extrajudicial y cuándo usarla?',
        descripcion: 'La conciliación extrajudicial es un mecanismo alternativo de resolución de conflictos mediante el cual dos o más partes en desacuerdo buscan llegar a un acuerdo voluntario con la ayuda de un conciliador certificado. Es obligatoria en muchos casos civiles y de familia antes de iniciar un proceso judicial. Sus principales ventajas son: rapidez, menor costo económico, confidencialidad y la posibilidad de mantener relaciones entre las partes.',
        fecha: '2026-05-20',
        categoria: 'Conciliación',
        imagen: '/assets/images/banner/conciliacion_.jpg',
        user: { email: 'admin@cimarc.com' }
    },
    {
        id: '2',
        titulo: 'Diferencias entre conciliación y arbitraje: ¿cuál elegir?',
        descripcion: 'Muchas personas confunden la conciliación con el arbitraje, pero son mecanismos muy distintos. La conciliación busca un acuerdo voluntario entre las partes con ayuda de un tercero neutral, mientras que el arbitraje es un proceso donde un árbitro dicta una decisión vinculante. Conoce en qué casos conviene cada uno y cómo CIMARC puede ayudarte a elegir el camino correcto.',
        fecha: '2026-05-12',
        categoria: 'Arbitraje',
        imagen: '/assets/images/component/abogado.jpg',
        user: { email: 'admin@cimarc.com' }
    },
    {
        id: '3',
        titulo: 'Cómo prepararse para una audiencia de conciliación',
        descripcion: 'Si tienes próxima una audiencia de conciliación, es fundamental llegar bien preparado. En este artículo te damos los consejos esenciales: documentación necesaria, actitud negociadora, cómo presentar tu posición de manera efectiva y qué esperar del proceso. La preparación adecuada aumenta significativamente las posibilidades de llegar a un acuerdo satisfactorio.',
        fecha: '2026-05-05',
        categoria: 'Legal',
        imagen: '/assets/images/component/Perfil-Profesional-y-Perfil-Personal.jpg',
        user: { email: 'admin@cimarc.com' }
    },
    {
        id: '4',
        titulo: 'El arbitraje como solución para conflictos empresariales',
        descripcion: 'El arbitraje es la opción preferida por las empresas para resolver disputas contractuales, laborales y comerciales de manera rápida y confidencial. A diferencia del proceso judicial, el arbitraje permite elegir a los expertos que resolverán el conflicto, establecer plazos más cortos y mantener la privacidad del caso.',
        fecha: '2026-04-28',
        categoria: 'Arbitraje',
        imagen: '/assets/images/component/figuraservicios.jpg',
        user: { email: 'admin@cimarc.com' }
    }
];

module.exports = { noticias, eventos, blogs };
