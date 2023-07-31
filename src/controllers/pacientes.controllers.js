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
        const mascotas = [req.body.mascota];
        const pacienteNuevo = new Paciente({ ...req.body, mascotas });
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

export const editarPaciente = async (req, res) => {
    try {
        await Paciente.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: "El paciente se actualizo correctamente"
        });
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al actualizar el paciente"
        });
    }
}

export const eliminarPaciente = async (req, res) => {
    try {
        await Paciente.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: "El paciente se eliminó correctamente"
        });
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al eliminar el paciente"
        });
    }
}