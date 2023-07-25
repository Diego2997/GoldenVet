import jwt  from "jsonwebtoken";

const generarJWT = (email, nombreUsuario)=>{
    return new Promise( (resolve, reject)=>{
        const datos = {email, nombreUsuario};
        jwt.sign(datos,process.env.SECRET_JWT,{
            expiresIn: '2h'
        },(error, token)=>{
            if(error){
                console.log(error);
                reject('No se pudo generar el token')
            }
            resolve(token);
        })
    })
}

export default generarJWT