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
import validarLogin from "../helpers/validarLogin";

const router = Router();

router
  .route("/usuarios")
  .get(obtenerUsuarios)
  .post(validarUSuario, crearUsuario);

router
  .route("/usuarios/:id")
  .get(obtenerUsuario)
  .put([validarJWT, validarUSuario], editarUsuario)
  .delete(validarJWT, eliminarUsuario);

router.route('/').post(validarLogin, login);
export default router;
