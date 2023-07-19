import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

export const validarComentario = [
  check("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .trim()
    .isLength({ min: 2, max: 16 })
    .withMessage("El nombre debe tener entre 2 y 16 caracteres."),
  check("comentario")
    .notEmpty()
    .withMessage("El comentario es obligatorio")
    .trim()
    .isLength({ min: 10, max: 200 })
    .withMessage("El comentario debe tener entre 10 y 200 caracteres."),
  check("puntuacion")
    .isInt({ min: 1, max: 5 })
    .withMessage("La puntuación debe ser un número entre 1 y 5."),
  (req, res, next) => resultadoValidacion(req, res, next),
];
