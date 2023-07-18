import Usuario from "../models/usuario";

const obtenerUsuario = async (req, res)=>{
    try{
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "Error al obtener usuarios"
        })
    }
}