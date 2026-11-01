/* =====================================================================
   ARCHIVO DE CONFIGURACIÓN (el único que hay que editar)
   ---------------------------------------------------------------------
   Para cada grupo puedes cambiar:
     nombre : nombre del grupo (opcional). Ej: "Los Innovadores"
     titulo : título de la presentación. Ej: "Energías renovables"
     lista  : false = pendiente  |  true = presentación cargada
   Respeta las comillas, las comas y las llaves { }.
   El archivo de cada grupo está en: presentaciones/grupo1.html ... grupo14.html
   ===================================================================== */

const CLASE = {
  titulo: "Exposiciones en clase",
  subtitulo: "Elige un grupo para abrir su presentación."
};

const GRUPOS = [
  { numero: 1,  nombre: "Ana Liz, Paloma Miranda", titulo: "Desarrollo de una aplicación móvil con asistente virtual inteligente y sistema web para consultas y agendamientos en el Centro de Salud de Caraguatay", lista: true  },
  { numero: 2,  nombre: "Enzo Gabriel Calderón Martínez, Luis Angel Medina Cardozo", titulo: "Desarrollo de una Distribución Linux basada en Debian para la Administración Centralizada, Control de Software y Detección de Amenazas de Red", lista: true },
  { numero: 3,  nombre: "", titulo: "", lista: false },
  { numero: 4,  nombre: "Mara Saribel Herrera Acuña", titulo: "Auditoría De La Infraestructura Tecnológica, De Red, De Seguridad Informática Y Continuidad Del Servicio A La Empresa Spynet De La Ciudad De Valenzuela, Valenzuela 2027.", lista: true },
  { numero: 5,  nombre: "Martin Duarte, Diego Peña", titulo: "Desarrollo de un Sistema de Supervisión Digital mediante Visión por Computadora e Inteligencia Artificial para la Detección de Fraude Académico en Exámenes Virtuales en el Instituto de Formación Docente Virgen del Rosario, Año 2026.", lista: true },
  { numero: 6,  nombre: "", titulo: "", lista: false },
  { numero: 7,  nombre: "", titulo: "", lista: false },
  { numero: 8,  nombre: "Enrique Duarte, Juan Añazco", titulo: "DESARROLLO DE UN SISTEMA BASADO EN INTELIGENCIA ARTIFICIAL PARA LA GENERACIÓN AUTOMÁTICA DE TAREAS Y RECOMENDACIÓN DE ASIGNACIÓN EN PROYECTOS DE DESARROLLO WEB DE LA EMPRESA XNET - 2026.", lista: true },
  { numero: 9, nombre: "Luz Aguilera", titulo: "Predicción del rendimiento académico mediante aprendizaje automático", lista: true },
  { numero: 10, nombre: "", titulo: "", lista: false },
  { numero: 11, nombre: "Lujan Garcete", titulo: "DESARROLLO DE UN SISTEMA WEB BASADO EN INTELIGENCIA ARTIFICIAL PARA LA PERSONALIZACIÓN DE PLANES ALIMENTARIOS Y LA ESTIMACIÓN DE CALORÍAS MEDIANTE IMÁGENES EN EL CONSULTORIO NUTRICIONAL “NUTRITIHARA” DE LA CIUDAD DE CAACUPÉ, AÑO 2026", lista: true },
  { numero: 12, nombre: "Dulce Aguilar, Lucas Martinez", titulo: "DESARROLLO DE UNA PLATAFORMA WEB CON IA PARA LA IDENTIFICACIÓN DE POSIBLES COINCIDENCIAS, UBICACIÓN Y GESTIÓN DE ANIMALES EN SITUACIÓN DE EXTRAVÍO O ABANDONO, INCLUYENDO LA DIFUSIÓN PARA SU ADOPCIÓN, EN LA ORGANIZACIÓN PIRIPATITAS, PIRIBEBUY, DURANTE EL AÑO 2026", lista: true },
  { numero: 13, nombre: "Fernando Cuenca, Jose Ivan", titulo: "DESARROLLO DE UN SISTEMA INTELIGENTE BASADO EN MODELOS PREDICTIVOS PARA LA ESTIMACIÓN DE LA DEMANDA Y LA RECOMENDACIÓN DE REPOSICIÓN DE MEDICAMENTOS DE LA FARMACIA PIRIPOTY, UBICADA EN EL BARRIO CÉNTRICO DE PIRIBEBUY, CORDILLERA, DURANTE EL AÑO 2026.", lista: true },
  { numero: 14, nombre: "", titulo: "", lista: false }
];
