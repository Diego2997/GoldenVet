import { Schema, model } from 'mongoose';

const comentarioSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 16,
    },
    comentario: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 200,
    },
    puntuacion: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    creado:{
    type:Date,
    default: ()=>new Date()
    }
  }
);

comentarioSchema.set('toJSON', {
	transform: (documento, returnedObject) => {
		returnedObject.id = returnedObject._id;
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const Comentario = model('comentario', comentarioSchema);
export default Comentario;
