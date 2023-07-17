import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion"

export const validacionTurno = [
    check("detalleVisita")
        .notEmpty()
        .withMessage("El detalle de la visita es obligatorio")
        .isLength({min: 5, max: 150})
        .withMessage("El detalle debe de contener entre 5 y 150 caracteres"),
    check("veterinario")
        .notEmpty()
        .withMessage("El nombre del veterinario es obligatorio")
        .isLength({min: 3, max: 100})
        .withMessage("La nombre del veterinario debe de contener entre 3 y 50 caracteres"),
    check("paciente")
        .notEmpty()
        .withMessage("El nombre del paciente es obligatorio")
        .isLength({min: 2, max: 50})
        .withMessage("La nombre del paciente debe de contener entre 2 y 50 caracteres"),
    check("fechaYHora")
        .notEmpty()
        .withMessage("la fecha y la hora es obligatoria")
        .isLength({min: 14, max: 20})
        .withMessage("La tarea debe de contener entre 5 y 100 caracteres"),
    (req,res,next)=>{resultadoValidacion(req,res,next)}
];