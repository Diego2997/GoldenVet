const validarRolAdministrador = (req, res, next) => {
    if (req.rol !== 'administrador') {
        return res.status(403).json({
            mensaje: 'Acceso denegado. Solo los administradores pueden realizar esta acción.'
        });
    }
    next();
};

export { validarRolAdministrador };