import { Router } from "express";
import { 
    eliminarTurno, 
    crearTurno, 
    modificarTurno, 
    obtenerTurno, 
    obtenerTurnos }
     from "../controllers/turnos.controllers";
import { validacionTurno } from "../helpers/validacionTurnos";
import validarJWT from "../helpers/verificarToken-jwt";
import { validarUsuarioLogueado } from "../helpers/validarUsuarioLogueado";
import { validarRolAdministrador } from "../helpers/validarRolAdministrador";

const turnosRuta = Router();

turnosRuta.route('/turnos')
    .get([validarJWT, validarRolAdministrador], obtenerTurnos)
    .post([validarJWT, validacionTurno],crearTurno);

turnosRuta.route('/turnos/:id')
    .get([validarJWT, validarUsuarioLogueado],obtenerTurno)
    .put([validarJWT, validacionTurno],modificarTurno)
    .delete([validarJWT, validarUsuarioLogueado], eliminarTurno);

export default turnosRuta;