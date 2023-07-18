import { request, response } from "express";
import Comentario from "../models/comentario";

export const obtenerComentarios = async (req, res = response) => {
  try {
    const comentarios = await Comentario.find();
    res.status(200).json(comentarios);
  } catch (error) {
    res.status(404).json({ mensaje: "Error al obtener los comentarios" });
  }
};

export const crearComentario = async (req = request, res = response) => {
  try {
    const nuevoComentario = new Comentario(req.body);
    await nuevoComentario.save();
    res.status(201).json({ mensaje: "Se creó un nuevo comentario" });
  } catch (error) {
    res.status(404).json({ mensaje: "Error al crear el comentario" });
  }
};

export const borrarComentario = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    await Comentario.findByIdAndDelete(id);
    res.status(200).json({ mensaje: "El comentario se eliminó correctamente" });
  } catch (error) {
    res.status(404).json({ mensaje: "Error al eliminar un comentario" });
  }
};
