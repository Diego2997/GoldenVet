import { Router } from "express";
import { crearUsuario, obtenerUsuarios } from "../controllers/usuarios.controllers";

const router = Router();

router.route("/usuarios").get(obtenerUsuarios).post(crearUsuario);

export default router;