import { Schema, model } from 'mongoose';

const pacienteSchema = new Schema({
    nombreDuenio: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true,
    },
    apellido: {
        type: String,
        minLength: 2,
        maxLength: 20,
        required: true,
    },
    email: {
        type: String,
        minLength: 15,
        maxLength: 50,
        required: true,
        unique: true,
    },
    telefono: {
        type: String,
        minLength: 10,
        maxLength: 10,
    },
    direccion: {
        type: String,
        minLength: 5,
        maxLength: 50,
    },
    mascota: {
        nombre: {
            type: String,
            minLength: 2,
            maxLength: 50,
            required: true,
        },
        especie: {
            type: String,
            minLength: 2,
            maxLength: 50,
            required: true,
        },
        raza: {
            type: String,
            minLength: 2,
            maxLength: 50,
            required: true,
        },
        historialMedico: {
            type: [String], 
            validate: {
                validator: function (array) {
                    return array.every((item) => typeof item === 'string');
                },
            },
        },
    },
});

const Paciente = model("paciente", pacienteSchema);
export default Paciente;