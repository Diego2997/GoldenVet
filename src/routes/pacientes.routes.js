import { Router } from "express";
import { crearPaciente, obtenerPaciente, obtenerPacientes } from "../controllers/pacientes.controllers";

const router = Router();

router.route('/pacientes')
    .get(obtenerPacientes)
    .post(crearPaciente);
    
router.route('/pacientes/:id').get(obtenerPaciente);

export default router;