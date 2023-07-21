import { Schema, model } from "mongoose";

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    minLength: 2,
    maxLength: 100,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 600,
  },
  precio: {
    type: Number,
    required: true,
    min: 0,
    max: 50000,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  imagen: {
    type: String,
    required: true,
  },
});

productoSchema.set('toJSON', {
	transform: (documento, returnedObject) => {
		returnedObject.id = returnedObject._id;
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const Producto = model("producto", productoSchema);
export default Producto;
