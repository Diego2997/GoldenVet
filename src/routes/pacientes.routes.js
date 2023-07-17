import { Router } from "express";
import { crearPaciente, editarPaciente, obtenerPaciente, obtenerPacientes, eliminarPaciente } from "../controllers/pacientes.controllers";

const router = Router();

router.route('/pacientes')
    .get(obtenerPacientes)
    .post(crearPaciente);
    
router.route('/pacientes/:id')
    .get(obtenerPaciente)
    .put(editarPaciente)
    .delete(eliminarPaciente);

export default router;