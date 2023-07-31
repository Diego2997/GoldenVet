import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";


const validarServicio = [
  check("nombreServicio")
    .notEmpty()
    .withMessage("El nombre del servicio es obligatorio")
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre del servicio tiene que tener entre 2 y 100 caracteres"),
  check("descripcion")
    .notEmpty()
    .withMessage("La descripcion del servicio es obligatoria")
    .trim()
    .isLength({ min: 2, max: 600 })
    .withMessage("La descripcion del servicio tiene que tener entre 2 y 600 caracteres"),
  check("imagen")
    .notEmpty()
    .withMessage("La imagen debe ser obligatoria")
    .trim()
    .matches(
      /^(https?:\/\/)?(?:www\.)?[\w-]+\.[\w.-]+(?:\/[\w-./?%&=]*)?\.(?:jpg|jpeg|png|gif|bmp|jpeg\?[\w=&.]*)$/
    )
    .withMessage("La URL de la imagen no es válida. Asegúrate de que esté correctamente escrita y que termine con una extensión de imagen válida. Ejemplo de formato válido: 'https://www.ejemplo.com/imagen.jpg' "),
    check("subservicios")
    .notEmpty()
    .withMessage("Debes proporcionar al menos un subservicio.")
    .isArray()
    .withMessage("Los subservicios deben ser un array."),
  check("subservicios.*.nombreSubservicio")
    .notEmpty()
    .withMessage("El nombre del subservicio es obligatorio")
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre del subservicio debe tener entre 2 y 100 caracteres."),
  check("subservicios.*.descripcionSubservicio")
    .notEmpty()
    .withMessage("La descripcion del subservicio es obligatoria")
    .trim()
    .isLength({ min: 2, max: 600 })
    .withMessage("La descripcion del subservicio debe tener entre 2 y 600 caracteres."),
  check("subservicios.*.imagenSubservicio")
    .notEmpty()
    .withMessage("La imagen del subservicio debe ser obligatoria")
    .trim()
    .matches(
      /^(https?:\/\/)?(?:www\.)?[\w-]+\.[\w.-]+(?:\/[\w-./?%&=]*)?\.(?:jpg|jpeg|png|gif|bmp|jpeg\?[\w=&.]*)$/
    )
    .withMessage("La URL de la imagen no es válida. Asegúrate de que esté correctamente escrita y que termine con una extensión de imagen válida. Ejemplo de formato válido: 'https://www.ejemplo.com/imagen.jpg' "),
    (req, res, next)=>{ resultadoValidacion(req, res, next)} 
];

export default validarServicio