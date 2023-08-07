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

const turnosRuta = Router();

turnosRuta.route('/turnos')
    .get([validarJWT], obtenerTurnos)
    .post([validarJWT, validacionTurno],crearTurno);

turnosRuta.route('/turnos/:id')
    .get(validarJWT, obtenerTurno)
    .put([validarJWT, validacionTurno],modificarTurno)
    .delete(validarJWT, eliminarTurno);

export default turnosRuta;