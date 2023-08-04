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
import { validarUsuarioLogueado } from "../helpers/validarUsuarioLogueado";

const router = Router();

router.route('/pacientes')
    .get([validarJWT, validarRolAdministrador], obtenerPacientes)
    .post([validarJWT, validarUsuarioLogueado, validarPaciente], crearPaciente);
    
router.route('/pacientes/:id')
    .get([validarJWT, validarUsuarioLogueado], obtenerPaciente)
    .put([validarJWT, validarUsuarioLogueado, validarPaciente], editarPaciente)
    .delete([validarJWT, validarUsuarioLogueado], eliminarPaciente);

export default router;