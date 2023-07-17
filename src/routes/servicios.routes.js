import { Router } from "express";
import {
  borrarServicio,
  crearServicio,
  editarServicio,
  obtenerServicio,
  obtenerunServicio,
} from "../controllers/servicios.controllers";
import validarServicio from "../helpers/validarServicio";


const router = Router();

router.route("/servicios").get(obtenerServicio).post(validarServicio,crearServicio);
router
  .route("/servicios/:id")
  .delete(borrarServicio)
  .put(validarServicio, editarServicio)
  .get(obtenerunServicio);

export default router;