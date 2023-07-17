import {Schema,model} from 'mongoose'

const comentarioSchema = new Schema({
    nombre:{
    type:String,
    required:true,
    minLength:2,
    maxLength:16
    },
    comentario:{
    type:String,
    required:true,
    minLength:10,
    maxLength:200
    },
    fecha:{
    type:String,
    required:true
    },
    hora:{
    type:String,
    required:true
    },
    puntuacion:{
    type:Number,
    required:true,
    min:1,
    max:5
    }
})

const Comentario = model('comentario',comentarioSchema)
export default Comentario