import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
  nombreUsuario: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 15,
    maxLength: 50,
    validate: {
      validator: function (value) {
        return /\S+@\S+\.\S+/.test(value);
      },
      message: "El email no es válido.",
    },
  },
  rol: {
    type: String,
    required: true,
  },
});

usuarioSchema.set('toJSON', {
	transform: (documento, returnedObject) => {
		returnedObject.id = returnedObject._id;
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const Usuario = model("usuario", usuarioSchema);
export default Usuario;
