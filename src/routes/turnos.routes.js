import { Router } from "express";
import { 
    eliminarTurno, 
    ingresarTurno, 
    modificarTurno, 
    obtenerTurno, 
    obtenerTurnos }
     from "../controllers/turnos.controllers";
import { validacionTurno } from "../helpers/validacionTurnos";

const turnosRuta = Router();

turnosRuta.route('/turnos')
    .get(obtenerTurnos)
    .post(validacionTurno,ingresarTurno);

turnosRuta.route('/turnos/:id')
    .get(obtenerTurno)
    .put(validacionTurno,modificarTurno)
    .delete(eliminarTurno);

export default turnosRuta;