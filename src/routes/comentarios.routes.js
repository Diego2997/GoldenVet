import { Router } from "express";
import {
  borrarComentario,
  crearComentario,
  obtenerComentarios,
} from "../controllers/comentarios.controllers";
import { validarComentario } from "../helpers/validarComentario";
import validarJWT from "../helpers/verificarToken-jwt";
import { validarRolAdministrador } from "../helpers/validarRolAdministrador";

const router = Router();

router.get("/comentarios", obtenerComentarios);
router.post("/comentarios", validarComentario, crearComentario);
router.delete("/comentarios/:id", validarJWT, validarRolAdministrador, borrarComentario);

export default router;
