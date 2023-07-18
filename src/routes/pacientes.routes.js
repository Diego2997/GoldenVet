import { Router } from "express";
import { 
    crearPaciente, 
    editarPaciente, 
    obtenerPaciente, 
    obtenerPacientes, 
    eliminarPaciente 
} from "../controllers/pacientes.controllers";
import validarPaciente from "../helpers/validarPaciente";

const router = Router();

router.route('/pacientes')
    .get(obtenerPacientes)
    .post(validarPaciente, crearPaciente);
    
router.route('/pacientes/:id')
    .get(obtenerPaciente)
    .put(validarPaciente, editarPaciente)
    .delete(eliminarPaciente);

export default router;