import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion"

export const validacionTurno = [
    check("detalleVisita")
        .notEmpty()
        .withMessage("El detalle de la visita es obligatorio")
        .trim()
        .isLength({min: 5, max: 150})
        .withMessage("El detalle debe de contener entre 5 y 150 caracteres")
        .isAlpha('en-US', {ignore: '\s'})
        .withMessage("El detalle de la visita debe contener solo letras y espacios"),
    check("veterinario")
        .notEmpty()
        .withMessage("El nombre del veterinario es obligatorio")
        .trim()
        .isLength({min: 3, max: 100})
        .withMessage("El nombre del veterinario debe de contener entre 3 y 50 caracteres")
        .isIn(['Ezequiel',"Nahuel"])
        .withMessage("Los veterinarios solamente son Ezequiel y Nahuel")
        .isAlpha('en-US', {ignore: '\s'})
        .withMessage("El nombre del veterinario debe contener solo letras y espacios"),
    check("paciente")
        .notEmpty()
        .withMessage("El nombre del paciente es obligatorio")
        .trim()
        .isLength({min: 2, max: 50})
        .withMessage("El nombre del paciente debe de contener entre 2 y 50 caracteres")
        .isAlpha('en-US', {ignore: '\s'})
        .withMessage("El nombre del paciente debe contener solo letras y espacios"),
    check("fechaYHora")
        .notEmpty()
        .withMessage("La fecha y la hora es obligatoria")
        .trim()
        .matches(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\s([0-1][0-9]|2[0-3]):(00|30)$/)
        .withMessage("La fecha y hora deben tener el siguiente formato: dd/mm/yyyy hh:00 o dd-mm-yyyy hh:30")
        .custom((value) => {
            const parsedDate = new Date(value);
            if (isNaN(parsedDate.getTime())) {
                throw new Error("La fecha y hora deben ser una fecha válida");
            }
            return true;
        })
        .custom((value) => {
            const fechaHora = new Date(value);
            const hora = fechaHora.getHours();
            const minutos = fechaHora.getMinutes();
            if ((hora < 8 || hora > 20) || (hora == 20 && minutos == 30)) {
                throw new Error("El turno debe estar en el rango de 8 a 20 horas");
            }
            return true;
        })
        .custom((value) => {
            const fechaCreacion = new Date();
            const fechaHora = new Date(value);
            if (fechaHora < fechaCreacion) {
                throw new Error("No es posible programar un turno para una fecha y hora anterior a la actual");
            }
            return true;
        })
        .custom((value) => {
            const fechaHora = new Date(value);
            if (fechaHora.getDay() == 0 || fechaHora.getDay() == 6) {
                throw new Error("Los turnos solo pueden entregarse de lunes a viernes");
            }
            return true;
        }),
    (req,res,next)=>{resultadoValidacion(req,res,next)}
];
