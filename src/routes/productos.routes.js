import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  obtenerProductos,
  obtenerUnProducto,
} from "../controllers/productos.controllers";

const router = Router();

router.route("/productos").get(obtenerProductos).post(crearProducto);
router
  .route("/productos/:id")
  .delete(borrarProducto)
  .put(editarProducto)
  .get(obtenerUnProducto);

export default router;
