import { Router } from "express";
import { obtenerPacientes } from "../controllers/pacientes.controllers";

const router = Router();

router.route('/pacientes').get(obtenerPacientes);

export default router;