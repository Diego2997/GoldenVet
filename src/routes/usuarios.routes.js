import { Router } from "express";
import {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuario,
} from "../controllers/usuarios.controllers";

const router = Router();

router.route("/usuarios").get(obtenerUsuarios).post(crearUsuario);

router.route("/usuarios/:id").get(obtenerUsuario);

export default router;
