import { Router } from "express";
import {
  borrarComentario,
  crearComentario,
  obtenerComentarios,
} from "../controllers/comentarios.controllers";
import { validarComentario } from "../helpers/validarComentario";
import validarJWT from "../helpers/verificarToken-jwt";

const router = Router();

router.get("/comentarios", obtenerComentarios);
router.post("/comentarios",[validarJWT, validarComentario], crearComentario);
router.delete("/comentarios/:id", validarJWT, borrarComentario);

export default router;
