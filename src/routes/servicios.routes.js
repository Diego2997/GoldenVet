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

const router = Router();

router.route("/servicios").get(obtenerServicio).post([validarJWT, validarServicio],crearServicio);
router
  .route("/servicios/:id")
  .delete(validarJWT, borrarServicio)
  .put([validarJWT, validarServicio], editarServicio)
  .get(obtenerunServicio);

export default router;