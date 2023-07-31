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
import { validarRolAdministrador } from "../helpers/validarRolAdministrador";
const router = Router();

router
  .route("/productos")
  .get(obtenerProductos)
  .post([validarJWT, validarRolAdministrador, validarProducto], crearProducto);

router
  .route("/productos/:id")
  .delete([validarJWT, validarRolAdministrador], borrarProducto)
  .put([validarJWT, validarRolAdministrador, validarProducto], editarProducto)
  .get(obtenerUnProducto);

export default router;
