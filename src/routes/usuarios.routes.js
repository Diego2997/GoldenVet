import { Router } from "express";
import {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuario,
  editarUsuario,
  eliminarUsuario,
  login,
} from "../controllers/usuarios.controllers";
import validarUsuario from "../helpers/validarUsuario";
import validarJWT from "../helpers/verificarToken-jwt";
import { validarRolAdministrador } from "../helpers/validarRolAdministrador";
import { validarUsuarioLogueado } from "../helpers/validarUsuarioLogueado";
import validarLogin from "../helpers/validarLogin";
import validarJWTcrearUsuario from "../helpers/validarToken-crearUsuario";
import validarUsuarioEdicion from "../helpers/validarUsuarioEdicion";

const router = Router();

router
  .route("/usuarios")
  .get([validarJWT, validarRolAdministrador], obtenerUsuarios)
  .post([validarJWTcrearUsuario, validarUsuario], crearUsuario);

router
  .route("/usuarios/:id")
  .get([validarJWT, validarUsuarioLogueado], obtenerUsuario)
  .put(validarJWT, validarUsuarioLogueado, validarUsuarioEdicion, editarUsuario)
  .delete([validarJWT, validarUsuarioLogueado], eliminarUsuario);

router.route('/').post(validarLogin, login);
export default router;
