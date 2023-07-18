import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarUSuario = [
  check("nombreUsuario")
    .notEmpty()
    .withMessage("El nombre del usuario es obligatorio.")
    .isLength({ min: 2, max: 30 })
    .withMessage("El nombre del usuario debe tener entre 2 y 30 caracteres."),
  check("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,16}$/
    )
    .withMessage(
      "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un carácter especial y un número. Además, la longitud máxima es de 16 caracteres."
    ),
  check("email")
    .notEmpty()
    .withMessage("El correo electrónico es obligatorio.")
    .matches(/\S+@\S+\.\S+/)
    .withMessage("El correo electrónico debe tener este formato ejemplo@mail.com"),
  check("rol")
    .notEmpty()
    .withMessage("El obligatorio completar el campo Rol.")
    .isIn(["administrador", "usuario", "veterinario", "paciente"])
    .withMessage(
      "La categoría debe ser una de las siguientes opciones [administrador, usuario, veterinario o paciente]"
    ),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarUSuario;
