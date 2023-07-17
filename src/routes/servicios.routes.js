import { Router } from "express";
import {
  borrarServicio,
  crearServicio,
  editarServicio,
  obtenerServicio,
  obtenerunServicio,
} from "../controllers/servicios.controllers";

const router = Router();

router.route("/servicios").get(obtenerServicio).post(crearServicio);
router
  .route("/servicios/:id")
  .delete(borrarServicio)
  .put(editarServicio)
  .get(obtenerunServicio);

export default router;