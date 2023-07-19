import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarPaciente = [
    check("nombreDuenio")
        .notEmpty()
        .withMessage("El nombre del dueño es obligatorio")
        .isLength({ min: 2, max: 50 })
        .withMessage("El nombre del dueño debe que tener entre 2 y 50 caracteres"),

    check("apellido")
        .notEmpty()
        .withMessage("El apellido del dueno es obligatorio")
        .isLength({ min: 2, max: 20 })
        .withMessage("El apellido del dueno debe que tener entre 2 y 20 caracteres"),

    check("email")
        .notEmpty()
        .withMessage("El email del dueño es obligatorio")
        .isEmail()
        .withMessage("El email del dueno no es válido")
        .isLength({ min: 15, max: 50 })
        .withMessage("El email del dueno debe que tener entre 15 y 50 caracteres"),

    check("telefono")
        .isLength({ min: 7, max: 10 })
        .withMessage("El telefono del dueno debe que tener entre 7 y 10 caracteres"),

    check("direccion")
        .isLength({ min: 5, max: 50 })
        .withMessage("La direccion del dueno debe que tener entre 5 y 50 caracteres"),

    check('mascota.nombre')
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage('El nombre de la mascota debe tener entre 2 y 50 caracteres')
        .notEmpty()
        .withMessage('El nombre de la mascota es requerido'),
    
    check('mascota.especie')
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage('La especie de la mascota debe tener entre 2 y 50 caracteres')
        .notEmpty()
        .withMessage('La especie de la mascota es requerida'),

    check('mascota.raza')
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage('La raza de la mascota debe tener entre 2 y 50 caracteres')
        .notEmpty()
        .withMessage('La raza de la mascota es requerida'),

    check('mascota.historialMedico')
        .isArray()
        .withMessage('El historial médico debe ser un array')
        .custom((value) => {
            return value.every((item) => typeof item === 'string');
        })
        .withMessage('El historial médico debe contener solo valores de tipo string'),
    
    (req, res, next)=>{ resultadoValidacion(req, res, next) }
];

export default validarPaciente;