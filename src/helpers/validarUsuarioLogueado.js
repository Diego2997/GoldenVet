const validarUsuarioPropio = (req, res, next) => {
    const usuarioId = req.params.id;

    if (req.rol === 'administrador') {
        return next();
    }

    if (req.rol === 'usuario' && req.id !== usuarioId) {
        return res.status(403).json({
            mensaje: 'Acceso denegado. No tienes permiso para realizar esta acción.'
        });
    }

    next();
};

export { validarUsuarioPropio };