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
const router = Router();

router
  .route("/usuarios")
  .get(obtenerUsuarios)
  .post([validarJWT, validarUSuario], crearUsuario);

router
  .route("/usuarios/:id")
  .get(obtenerUsuario)
  .put([validarJWT, validarUSuario], editarUsuario)
  .delete(validarJWT, eliminarUsuario);

router.post('/', login);
export default router;
