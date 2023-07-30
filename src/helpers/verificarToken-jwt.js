import jwt from 'jsonwebtoken'

const validarJWT = (req, res, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            mensaje: 'No hay token en la petición'
        });
    }
    try {
        const datos = jwt.verify(token, process.env.SECRET_JWT);
        req.id = datos.uid;
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

export default validarJWT;