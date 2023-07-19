import Usuario from "../models/usuario";

export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al obtener usuarios.",
    });
  }
};

export const obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al obtener al usuario.",
    });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const usuarioExistente = await Usuario.findOne({ nombreUsuario: req.body.nombreUsuario });
    const emailExistente = await Usuario.findOne({ email: req.body.email });
    if (usuarioExistente || emailExistente) {
      let resumenErrores = "";

      if (usuarioExistente) {
        resumenErrores += "Este nombre de usuario ya está en uso. ";
      }
      if (emailExistente) {
        resumenErrores += "Este correo electrónico ya está en uso.";
      }

      return res.status(400).json({ mensaje: resumenErrores });
    } else {
    const usuarioNuevo = new Usuario(req.body)
    await usuarioNuevo.save();
    res.status(201).json({
      mensaje: "El usuario fué creado.",
    });
  }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear usuario.",
    });
  }

};

export const editarUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El usuario se actualizó correctamente.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al actualizar el usuario.",
    });
  }
};

export const eliminarUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El usuario se eliminó correctamente.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al eliminar usuario.",
    });
  }
};
