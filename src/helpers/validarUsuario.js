import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarUSuario = [
  check("nombreUsuario")
    .notEmpty()
    .withMessage("El nombre del usuario es obligatorio.")
    .trim()
    .isLength({ min: 2, max: 30 })
    .withMessage("El nombre del usuario debe tener entre 2 y 30 caracteres."),
  check("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria.")
    .trim()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,}$/
    )
    .withMessage(
      "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un carácter especial y un número. Además, la longitud máxima es de 16 caracteres."
    ),
  check("email")
    .notEmpty()
    .withMessage("El correo electrónico es obligatorio.")
    .trim()
    .isEmail()
    .withMessage("El email no es valido")
    .matches(/\S+@\S+\.\S+/)
    .withMessage(
      "El correo electrónico debe tener este formato ejemplo@mail.com"
    ),
  check("rol")
    .default("usuario")
    .isIn(["administrador", "usuario", "veterinario", "paciente"])
    .withMessage("El rol no existe."),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarUSuario;
