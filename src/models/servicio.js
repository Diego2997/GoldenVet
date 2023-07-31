import { Schema, model } from "mongoose";

const servicioSchema = new Schema({
  nombreServicio: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
    
  },
  descripcion: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 600,
  },
  imagen: {
    type: String,
    required: true,
  },
  subservicios: [{
    nombreSubservicio: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 100,
    },
    descripcionSubservicio: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 600,
    },
    imagenSubservicio: {
      type: String,
      required: true,
    },
  }],
});
function transformSubservicio(documento, returnedObject) {
  returnedObject.id = returnedObject._id;
  delete returnedObject._id;
  returnedObject

}
servicioSchema.set('toJSON', {
  transform: (documento, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    if (Array.isArray(returnedObject.subservicios)) {
      returnedObject.subservicios.forEach(subservicio => transformSubservicio(null, subservicio));
    }
  },
});

const Servicio = model("servicio", servicioSchema);

export default Servicio;
