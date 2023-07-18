import { Router } from "express";
import {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuario,
  editarUsuario
} from "../controllers/usuarios.controllers";

const router = Router();

router.route("/usuarios").get(obtenerUsuarios).post(crearUsuario);

router.route("/usuarios/:id").get(obtenerUsuario).put(editarUsuario);

export default router;
