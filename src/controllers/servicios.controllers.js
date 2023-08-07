import Servicio from '../models/servicio'

export const obtenerServicio = async (req,res) => {
    try {
        const servicio = await Servicio.find()
        res.status(200).json(servicio)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje : 'Error al buscar los servicios'
        })
    }
  }
export const obtenerunServicio = async (req, res) => {
    try {
        const servicio = await Servicio.findById(req.params.id)
        res.status(200).json(servicio)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje : 'Error al buscar el servicio'
        })
    }
  }

export const crearServicio = async (req, res) => {
    try {
        const serviciooNuevo = new Servicio(req.body);
        await serviciooNuevo.save();
        res.status(201).json({
            mensaje: ' El servicio se creo correctamente'
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje : 'Error al crear el servicio'
        })
    }
  }

export const borrarServicio = async (req, res) => {
    try {
        await Servicio.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje: 'El servicio fue eliminado correctamente'
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje : 'No se pudo eliminar el servicio'
        })
    }
  }
    
export const editarServicio = async (req, res) => {
    try {
       await Servicio.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje: 'El servicio fue modificada correctamente'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje : 'No se pudo modificar el servicio'
        })
    }
  }