import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion"

export const validacionTurno = [
    check("detalleVisita")
        .notEmpty()
        .withMessage("El detalle de la visita es obligatorio")
        .isLength({min: 5, max: 150})
        .withMessage("El detalle debe de contener entre 5 y 150 caracteres")
        .isAlpha('en-US', {ignore: '\s'})
        .withMessage("Deve de contener solo letras y espacios"),
    check("veterinario")
        .notEmpty()
        .withMessage("El nombre del veterinario es obligatorio")
        .isLength({min: 3, max: 100})
        .withMessage("eL nombre del veterinario debe de contener entre 3 y 50 caracteres")
        .isAlpha('en-US', {ignore: '\s'})
        .withMessage("Deve de contener solo letras y espacios"),
    check("paciente")
        .notEmpty()
        .withMessage("El nombre del paciente es obligatorio")
        .isLength({min: 2, max: 50})
        .withMessage("La nombre del paciente debe de contener entre 2 y 50 caracteres")
        .isAlpha('en-US', {ignore: '\s'})
        .withMessage("Deve de contener solo letras y espacios"),
    check("fechaYHora")
        .notEmpty()
        .withMessage("la fecha y la hora es obligatoria")
        .isLength({min: 14, max: 20})
        .withMessage("La fecha debe de contener entre 14 y 20 caracteres")
        .matches(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})(\s)([0-1][0-9]|2[0-3])(:)([0-5][0-9])$/)
        .withMessage("La fecha y hora deve de tener el siguiente formato: dd/mm/yyyy hh:mm o dd-mm-yyyy hh:mm"),
    (req,res,next)=>{resultadoValidacion(req,res,next)}
];