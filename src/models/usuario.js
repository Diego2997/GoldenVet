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
    validate: {
      validator: function (value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,}$/.test(
          value
        );
      },
      message:
        "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un carácter especial y un número. Además, la longitud máxima es de 16 caracteres.",
    },
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

const Usuario = model("usuario", usuarioSchema);
export default Usuario;
