import jwt from 'jsonwebtoken';

const validarJWTcrearUsuario = (req, res, next) => {
    const token = req.header('x-token');

    if (!token) {
        return next();
    }

    try {
        const datos = jwt.verify(token, process.env.SECRET_JWT);
        req.id = datos.id;
        req.email = datos.email;
        req.nombreUsuario = datos.nombreUsuario;
        req.rol = datos.rol;

        if (req.rol !== 'administrador') {
            return res.status(403).json({
                mensaje: 'No tienes permiso para crear usuarios administrador.',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            mensaje: 'El token no es válido',
        });
    }

    next();
};

export default validarJWTcrearUsuario;