import { Router } from "express";
import {
  borrarComentario,
  crearComentario,
  obtenerComentarios,
} from "../controllers/comentarios.controllers";

const router = Router();

router.get("/comentarios", obtenerComentarios);
router.post("/comentarios", crearComentario);
router.delete("/comentarios/:id", borrarComentario);

export default router;
