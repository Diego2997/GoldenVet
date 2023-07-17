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
})

const Servicio = model("servicio", servicioSchema);

export default Servicio;