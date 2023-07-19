import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarProducto = [
  check("nombreProducto")
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio.")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre debe tener entre 2 y 100 caracteres"),
  check("descripcion")
    .notEmpty()
    .withMessage("La descripción del producto es obligatoria.")
    .isLength({ min: 10, max: 600 })
    .withMessage("La descripción debe tener entre 10 y 600 caracteres"),
  check("precio")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .isNumeric()
    .withMessage("El valor debe tener un formato numerico")
    .custom((value) => {
      if (value >= 0 && value <= 50000) {
        return true;
      } else {
        throw new Error("El precio debe estar entre 0 y 50000");
      }
    }),
  check("stock")
    .notEmpty()
    .withMessage("El stock es obligatorio")
    .isNumeric()
    .withMessage("El valor debe tener un formato numerico")
    .custom((value) => {
      if (value >= 1 && value <= 100) {
        return true;
      } else {
        throw new Error("El stock debe estar entre 1 y 100");
      }
    }),
  check("imagen")
    .notEmpty()
    .withMessage("La imagen es obligatoria")
    .matches(
      /^(https?:\/\/)?(?:www\.)?[\w-]+\.[\w.-]+(?:\/[\w-./?%&=]*)?\.(?:jpg|jpeg|png|gif|bmp|jpeg\?[\w=&.]*)$/
    )
    .withMessage(
      "Debe ingresar una URL de imagen válida: jp, jpge, png, gif, bmp."
    ),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarProducto;
