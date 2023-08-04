import Paciente from "../models/paciente";
import Usuario from "../models/usuario";

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
        const { id } = req.params;
        const paciente = await Paciente.findById(id);

        propiedadUsuario(paciente.idUsuario, req);

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
        const { idUsuario, nombreDuenio, apellido, telefono, direccion, mascota } = req.body;

        const pacienteExistente = await Paciente.findOne({ idUsuario });

        if (pacienteExistente) {
            return res.status(400).json({
                mensaje: "El usuario ya tiene un paciente asociado"
            });
        }

        const mascotas = mascota ? [mascota] : [];

        const pacienteNuevo = new Paciente({
            idUsuario,
            nombreDuenio,
            apellido,
            telefono,
            direccion,
            mascotas,
        });

        const pacienteGuardado = await pacienteNuevo.save();
        const pacienteId = pacienteGuardado._id;

        const usuario = await Usuario.findOne({ _id: idUsuario });
        usuario.paciente = pacienteId;
        await usuario.save();

        res.status(201).json({
            mensaje: "El paciente se creó correctamente"
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al crear el paciente"
        });
    }
}

export const editarPaciente = async (req, res) => {
    try {
        const { nombreDuenio, apellido, telefono, direccion, mascota } = req.body;
        const { historialMedico } = mascota || {};
        const pacienteExistente = await Paciente.findById(req.params.id);

        if (!pacienteExistente) {
            return res.status(404).json({
                mensaje: "No se encontró el paciente"
            });
        }

        propiedadUsuario(pacienteExistente.idUsuario, req);

        pacienteExistente.nombreDuenio = nombreDuenio || pacienteExistente.nombreDuenio;
        pacienteExistente.apellido = apellido || pacienteExistente.apellido;
        pacienteExistente.telefono = telefono || pacienteExistente.telefono;
        pacienteExistente.direccion = direccion || pacienteExistente.direccion;

        if (mascota) {
            if (pacienteExistente.mascotas && pacienteExistente.mascotas.length > 0) {
                const mascotaExistente = pacienteExistente.mascotas.find(m => m.nombre === (mascota && mascota.nombre));

                if (mascotaExistente) {
                    mascotaExistente.especie = mascota.especie;
                    mascotaExistente.raza = mascota.raza;
                    if (historialMedico) {
                        mascotaExistente.historialMedico.push(historialMedico);
                    }
                } else {
                    pacienteExistente.mascotas.push(mascota);
                }
            } else {
                pacienteExistente.mascotas = [mascota];
            }
        }

        await pacienteExistente.save();
        res.status(200).json({
            mensaje: "El paciente se actualizó correctamente"
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al actualizar el paciente"
        });
    }
}

export const eliminarPaciente = async (req, res) => {
    try {
        const pacienteExistente = await Paciente.findById(req.params.id);

        if (!pacienteExistente) {
            return res.status(404).json({
                mensaje: "No se encontró el paciente a borrar"
            });
        }

        propiedadUsuario(pacienteExistente.idUsuario, req.id);

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

function propiedadUsuario(idUsuario, req){
    if (req.rol !== "administrador" && idUsuario != req.id) {
        return res.status(403).json({
            mensaje: "No tiene permiso para realizar esta acción"
        });
    }
}