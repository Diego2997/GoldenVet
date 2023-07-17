import { Router } from "express";
import { 
    eliminarTurno, 
    ingresarTurno, 
    modificarTurno, 
    obtenerTurno, 
    obtenerTurnos }
     from "../controllers/turnos.controllers";

const turnosRuta = Router();

turnosRuta.route('/turnos')
    .get(obtenerTurnos)
    .post(ingresarTurno);

turnosRuta.route('/turnos/:id')
    .get(obtenerTurno)
    .put(modificarTurno)
    .delete(eliminarTurno);