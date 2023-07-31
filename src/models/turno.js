import { Schema, model} from "mongoose";

const turnoSchema = new Schema({
    idUsuario:{
    type:Schema.Types.ObjectId,
    ref:'Usuario',
    required:true
    },
    detalleVisita:{
        type: String,
        minLength: 5,
        maxLength: 150,
        required: true,
    },
    veterinario:{
        type: String,
        minLength: 3,
        maxLength: 50,
        required: true,
    },
    paciente:{
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true,
    },
    fechaYHora:{
        type: String,
        minLength: 14,
        maxLength: 20,
        required: true,
    }
});

turnoSchema.set('toJSON', {
	transform: (documento, returnedObject) => {
		returnedObject.id = returnedObject._id;
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const Turno = model('turno', turnoSchema);

export default Turno;