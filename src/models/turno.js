import { Schema, model} from "mongoose";

const turnoSchema = new Schema({
    detalleVisita:{
        type: String,
        minLength: 5,
        maxLength: 150,
        require: true,
    },
    veterinario:{
        type: String,
        minLength: 3,
        maxLength: 50,
        require: true,
    },
    paciente:{
        type: String,
        minLength: 2,
        maxLength: 50,
        require: true,
    },
    fechaYHora:{
        type: String,
        minLength: 14,
        maxLength: 20,
        require: true,
    }
});

const Turno = model('turno', turnoSchema);

export default