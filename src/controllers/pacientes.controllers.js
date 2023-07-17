import Paciente from "../models/paciente";

export const obtenerPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.find();
        res.status(200).json(pacientes);
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al obtener los pacientes"
        });
    }
}

export const obtenerPaciente = async (req, res) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.status(200).json(paciente);
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al obtener el paciente"
        });
    }
}

export const crearPaciente = async (req, res) => {
    try {
        const pacienteNuevo = new Paciente(req.body);
        await pacienteNuevo.save();
        res.status(201).json({
            mensaje: "El paciente se creó correctamente"
        });
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al crear el paciente"
        });
    }
}