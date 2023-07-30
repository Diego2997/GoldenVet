import jwt from "jsonwebtoken";

const generarJWT = (email, nombreUsuario, rol) => {
    return new Promise((resolve, reject) => {
        const datos = { email, nombreUsuario, rol };
        jwt.sign(
            datos,
            process.env.SECRET_JWT,
            {
                expiresIn: '8h'
            },
            (error, token) => {
                if (error) {
                    console.log(error);
                    reject('No se pudo generar el token');
                }
                resolve(token);
            }
        );
    });
};

export default generarJWT;