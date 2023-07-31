import { Router } from "express";
import {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuario,
  editarUsuario,
  eliminarUsuario,
  login,
} from "../controllers/usuarios.controllers";
import validarUSuario from "../helpers/validarUsuario";
import validarJWT from "../helpers/verificarToken-jwt";
import { validarRolAdministrador } from "../helpers/validarRolAdministrador";
import { validarUsuarioLogueado } from "../helpers/validarUsuarioLogueado";
import validarLogin from "../helpers/validarLogin";


const router = Router();

router
  .route("/usuarios")
  .get(validarJWT, validarRolAdministrador, obtenerUsuarios)
  .post(validarUSuario, crearUsuario);

router
  .route("/usuarios/:id")
  .get(validarJWT, validarUsuarioLogueado, obtenerUsuario)
  .put(validarJWT, validarUsuarioLogueado, validarUSuario, editarUsuario)
  .delete(validarJWT, validarUsuarioLogueado, eliminarUsuario);

router.route('/').post(validarLogin, login);
export default router;
