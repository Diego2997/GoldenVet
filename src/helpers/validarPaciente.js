import { check, body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarPaciente = [
    check("nombreDuenio")
        .notEmpty()
        .withMessage("El nombre del dueño es obligatorio")
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage("El nombre del dueño debe que tener entre 2 y 50 caracteres"),

    check("apellido")
        .notEmpty()
        .withMessage("El apellido del dueño es obligatorio")
        .trim()
        .isLength({ min: 2, max: 20 })
        .withMessage("El apellido del dueño debe que tener entre 2 y 20 caracteres"),

    check("telefono")
        .isLength({ min: 7, max: 10 })
        .withMessage("El telefono del dueño debe que tener entre 7 y 10 caracteres"),

    check("direccion")
        .isLength({ min: 5, max: 50 })
        .withMessage("La dirección del dueño debe que tener entre 5 y 50 caracteres"),

    body("mascota.nombre")
        .if((value, { req }) => req.body.mascota) // Realizar validación solo si existe la propiedad "mascota" en req.body
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage("El nombre de la mascota debe tener entre 2 y 50 caracteres")
        .notEmpty()
        .withMessage("El nombre de la mascota es requerida"),

    body("mascota.especie")
        .if((value, { req }) => req.body.mascota)
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage("La especie de la mascota debe tener entre 2 y 50 caracteres")
        .notEmpty()
        .withMessage("La especie de la mascota es requerida"),

    body("mascota.raza")
        .if((value, { req }) => req.body.mascota)
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage("La raza de la mascota debe tener entre 2 y 50 caracteres")
        .notEmpty()
        .withMessage("La raza de la mascota es requerida"),

    body("mascota.historialMedico.registro")
        .if((value, { req }) => req.body.mascota && req.body.mascota.historialMedico)
        .trim()
        .isLength({ min: 10, max: 500 })
        .withMessage("El historial de la mascota debe tener entre 10 y 500 caracteres")
        .notEmpty()
        .withMessage("El historial de la mascota es requerida"),

    body("mascota.historialMedico.fecha")
        .if((value, { req }) => req.body.mascota && req.body.mascota.historialMedico)
        .trim()
        .isLength({ min: 10, max: 50 })
        .withMessage("La fecha del historial médico debe tener entre 10 y 50 caracteres")
        .notEmpty()
        .withMessage("La fecha del historial médico es requerida"),
    
    body("mascota.imagen")
        .if((value, { req }) => req.body.mascota && req.body.mascota.imagen)
        .trim()
        .isLength({ min: 10, max: 300 })
        .withMessage("La imagen de la mascota debe tener entre 10 y 300 caracteres")
        .default("https://img.freepik.com/vector-premium/diseno-logotipo-dibujos-animados-mascota-perro-lindo-estilo-diseno-plano_203040-109.jpg"),
    
    (req, res, next) => { resultadoValidacion(req, res, next) }
];

export default validarPaciente;