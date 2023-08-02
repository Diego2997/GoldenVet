import jwt from 'jsonwebtoken'

const validarJWTcrearUsuario = (req, res, next) => {
    const token = req.header('x-token');
    if (!token) {
        next();
    }
    try {
        const datos = jwt.verify(token, process.env.SECRET_JWT);
        req.id = datos.id;
        req.email = datos.email;
        req.nombreUsuario = datos.nombreUsuario;
        req.rol = datos.rol;
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            mensaje: 'El token no es válido'
        });
    }

    next();
};

export default validarJWTcrearUsuario;