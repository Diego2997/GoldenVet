import { Router } from "express";
import {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuario,
  editarUsuario,
  eliminarUsuario
} from "../controllers/usuarios.controllers";

const router = Router();

router.route("/usuarios").get(obtenerUsuarios).post(crearUsuario);

router.route("/usuarios/:id").get(obtenerUsuario).put(editarUsuario).delete(eliminarUsuario);

export default router;
