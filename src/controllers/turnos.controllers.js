import Turno from "../models/turno";

export const obtenerTurnos = async (req, res) => {
    try {
        const turnos = await Turno.find();
        res.status(200).json(turnos);
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'Error no se encuentran los turnos'});
    }
};

export const ingresarTurno = async (req, res) => {
    try {
        const NuevoTurno = new Turno(req);
        await NuevoTurno.save();
        res.status(201).json({mensaje: 'Se logro agregar correctamente el turno'});
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'Error al poder cargar el nuevo turno'});
    }
};

export const obtenerTurno = async (req, res) => {
    try {
        const turno = await Turno.findById(req.params.id);
        res.status(200).json(turno);
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'Error turno no encontrado'});
    }
};

export const modificarTurno = async (req, res) => {
    try {
        await Turno.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({mensaje: 'Se logro modificar el turno'})
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'Error al modificar el turno'});
    }
};

export const eliminarTurno = async (req, res) => {
    try {
        await Turno.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: 'Se logro eliminar el turno'});
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'Error al eliminar el turno'});
    }
};