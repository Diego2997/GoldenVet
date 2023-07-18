import { Router } from "express";
import {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuario,
  editarUsuario,
  eliminarUsuario,
} from "../controllers/usuarios.controllers";
import validarUSuario from "../helpers/validarUsuario";

const router = Router();

router
  .route("/usuarios")
  .get(obtenerUsuarios)
  .post(validarUSuario, crearUsuario);

router
  .route("/usuarios/:id")
  .get(obtenerUsuario)
  .put(validarUSuario, editarUsuario)
  .delete(eliminarUsuario);

export default router;
