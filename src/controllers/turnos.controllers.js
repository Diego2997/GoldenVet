import Turno from "../models/turno";

export const obtenerTurnos = async (req, res) => {
    try {
        let turnos;

        if (req.rol === "administrador") {
            turnos = await Turno.find();
        }
        if (req.rol === "usuario") {
            turnos = await Turno.find({ idUsuario: req.id });
        }
        
        res.status(200).json(turnos);
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'Error no se encuentran los turnos'});
    }
};

export const crearTurno = async (req, res) => {
    try {
        const { fechaYHora } = req.body;

        const turnosMismoHorario = await Turno.find({fechaYHora});

        if (turnosMismoHorario.length >= 2) {
            return res.status(400).json({ mensaje: "Ya hay dos turnos reservados en el mismo horario" });
        }

        const nuevoTurno = new Turno(req.body);

        await nuevoTurno.save();
        res.status(201).json({ mensaje: "Turno creado exitosamente", turno: nuevoTurno });
    } catch (error) {
         console.log(error);
        res.status(500).json({ mensaje: "Error al crear el turno" });
    }
};

export const obtenerTurno = async (req, res) => {
    try {
        const turno = await Turno.findById(req.params.id);

        propiedadUsuario(turno.idUsuario, req);

        res.status(200).json(turno);
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'Error turno no encontrado'});
    }
};

export const modificarTurno = async (req, res) => {
    try {
        const { fechaYHora: fechaYHoraNueva } = req.body;
        const turnoId = req.params.id;

        const turnoExistente = await Turno.findById(turnoId);

        propiedadUsuario(turnoExistente.idUsuario, req);

        const fechaYHoraExistente = turnoExistente.fechaYHora;

        const validacionFechaYHora = fechaYHoraExistente.toString() !== fechaYHoraNueva.toString(); 

        if (validacionFechaYHora) {
          const turnosMismaFechaHoraNueva = await Turno.find({ fechaYHora: fechaYHoraNueva });
    
          if (turnosMismaFechaHoraNueva.length >= 2) {
            return res.status(400).json({ mensaje: "Ya hay dos turnos reservados en el mismo horario de la edición" });
          }
        }
    
        await Turno.findByIdAndUpdate(turnoId, req.body);
    
        res.status(200).json({ mensaje: "Turno modificado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'Error al modificar el turno'});
    }
};

export const eliminarTurno = async (req, res) => {
    try {
        const turnoExistente = await Turno.findById(req.params.id);

        if (!turnoExistente) {
            return res.status(404).json({
                mensaje: "No se encontró el turno a borrar"
            });
        }

        propiedadUsuario(turnoExistente.idUsuario, req);

        await Turno.findByIdAndDelete(req.params.id);

        res.status(200).json({mensaje: 'Se logro eliminar el turno'});
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'Error al eliminar el turno'});
    }
};

function propiedadUsuario(idUsuario, req){
    if (req.rol !== "administrador" && idUsuario != req.id) {
        return res.status(403).json({
            mensaje: "No tiene permiso para realizar esta acción"
        });
    }
}