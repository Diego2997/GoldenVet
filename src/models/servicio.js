import { Schema, model} from "mongoose";

const servicioSchema = new Schema({

    nombreServicio :{
        type:String,
        required:true,
        minLength:2,
        maxLength:30,
        unique:true
    },
    descripcion :{
        type:String,
        required:true,
        minLength:2,
        maxLength:600        
    },
    imagen :{
        type: String,
        required: true,
    }
});

servicioSchema.set('toJSON', {
	transform: (documento, returnedObject) => {
		returnedObject.id = returnedObject._id;
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const Servicio = model("servicio", servicioSchema);

export default Servicio;