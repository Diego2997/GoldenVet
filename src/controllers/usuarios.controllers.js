import Usuario from "../models/usuario";
import bcrypt from 'bcrypt'

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
    const nombreUsuario = req.body.nombreUsuario;
    const email = req.body.email;

    const errores = await validarExistenciaUsuarioEmail(nombreUsuario, email);
    if (errores) {
      return res.status(400).json({ mensaje: errores });
    } else {
      const usuarioNuevo = new Usuario(req.body);
      const salt =  bcrypt.genSaltSync()
      usuarioNuevo.password = bcrypt.hashSync(usuarioNuevo.password,salt)
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
    const usuarioExistente = await Usuario.findById(req.params.id);
    if (!usuarioExistente) {
      return res.status(404).json({
        mensaje: "Usuario no encontrado.",
      });
    }

    const nombreUsuario = req.body.nombreUsuario;
    const email = req.body.email;

    const errores = await validarExistenciaUsuarioEmail(nombreUsuario, email);
    if (errores) {
      if (
        usuarioExistente.nombreUsuario === nombreUsuario &&
        usuarioExistente.email === email
      ) {
        await Usuario.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json({
          mensaje: "El usuario se actualizó correctamente.",
        });
      } else {
        return res.status(400).json({ mensaje: errores });
      }
    } else {
      await Usuario.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        mensaje: "El usuario se actualizó correctamente.",
      });
    }
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

const validarExistenciaUsuarioEmail = async (nombreUsuario, email) => {
  const usuarioExistente = await Usuario.findOne({ nombreUsuario });
  const emailExistente = await Usuario.findOne({ email });

  let resumenErrores = "";

  if (usuarioExistente) {
    resumenErrores += "Este nombre de usuario ya está en uso. ";
  }
  if (emailExistente) {
    resumenErrores += "Este correo electrónico ya está en uso.";
  }

  return resumenErrores;
};
