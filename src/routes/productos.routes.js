import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  obtenerProductos,
  obtenerUnProducto,
} from "../controllers/productos.controllers";
import validarProducto from "../helpers/validacionProducto";
import validarJWT from "../helpers/verificarToken-jwt";
const router = Router();

router.route("/productos").get(obtenerProductos).post ([validarJWT, validarProducto], crearProducto);
router
  .route("/productos/:id")
  .delete(validarJWT, borrarProducto)
  .put([validarJWT, validarProducto], editarProducto)
  .get(obtenerUnProducto);

export default router;
