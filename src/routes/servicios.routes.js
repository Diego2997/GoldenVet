import { Router } from "express";
import {
  borrarServicio,
  crearServicio,
  editarServicio,
  obtenerServicio,
  obtenerunServicio,
} from "../controllers/servicios.controllers";
import validarServicio from "../helpers/validarServicio";
import validarJWT from "../helpers/verificarToken-jwt";
import { validarRolAdministrador } from "../helpers/validarRolAdministrador";

const router = Router();

router.route("/servicios")
  .get(obtenerServicio)
  .post([validarJWT, validarRolAdministrador, validarServicio],crearServicio);

router
  .route("/servicios/:id")
  .delete([validarJWT, validarRolAdministrador], borrarServicio)
  .put([validarJWT, validarRolAdministrador, validarServicio], editarServicio)
  .get(obtenerunServicio);

export default router;