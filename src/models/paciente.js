import { Schema, model } from 'mongoose';

const pacienteSchema = new Schema({
    idUsuario:{
        type:Schema.Types.ObjectId,
        ref:'Usuario',
        required:true
        },
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
    telefono: {
        type: String,
        minLength: 7,
        maxLength: 10,
    },
    direccion: {
        type: String,
        minLength: 5,
        maxLength: 50,
    },
    mascotas: [{
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
        historialMedico: [{
            registro: {
                type: String,
                minLength: 10,
                maxLength: 200
            },
            fecha: {
                type: String,
                required: true,
                maxLength: 50
            },
        }],
    }],
});

pacienteSchema.set('toJSON', {
	transform: (documento, returnedObject) => {
		returnedObject.id = returnedObject._id;
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const Paciente = model("paciente", pacienteSchema);
export default Paciente;
