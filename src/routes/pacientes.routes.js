import { Router } from "express";
import { 
    crearPaciente, 
    editarPaciente, 
    obtenerPaciente, 
    obtenerPacientes, 
    eliminarPaciente 
} from "../controllers/pacientes.controllers";
import validarPaciente from "../helpers/validarPaciente";
import validarJWT from "../helpers/verificarToken-jwt";
import { validarRolAdministrador } from "../helpers/validarRolAdministrador";

const router = Router();

router.route('/pacientes')
    .get([validarJWT, validarRolAdministrador], obtenerPacientes)
    .post(validarPaciente, crearPaciente);
    
router.route('/pacientes/:id')
    .get(obtenerPaciente)
    .put([validarJWT, validarPaciente], editarPaciente)
    .delete(validarJWT, eliminarPaciente);

export default router;