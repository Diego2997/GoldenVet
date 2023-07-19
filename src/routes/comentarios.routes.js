import { Router } from "express";
import {
  borrarComentario,
  crearComentario,
  obtenerComentarios,
} from "../controllers/comentarios.controllers";
import { validarComentario } from "../helpers/validarComentario";

const router = Router();

router.get("/comentarios", obtenerComentarios);
router.post("/comentarios",validarComentario, crearComentario);
router.delete("/comentarios/:id", borrarComentario);

export default router;
