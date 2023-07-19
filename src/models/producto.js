import { Schema, model } from "mongoose";

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 200,
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

const Producto = model("producto", productoSchema);
export default Producto;