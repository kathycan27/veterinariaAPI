//Importación JWT
import jwt from 'jsonwebtoken'
//Importación del modelo
import Veterinario from '../models/Veterinario.js'

//Definir una función para validar el JWT
const verificarAutenticacion = async (req,res,next)=>{

if(!req.headers.authorization) return res.status(404).json({msg:"Lo sentimos, debes proprocionar un token"})    
    const {authorization} = req.headers
    //Obtener el JWT
    try {
        //Obtener solo el token
        const {id} = jwt.verify(authorization.split(' ')[1],process.env.JWT_SECRET)
        //Obtener el usuario en base a la ID
        req.veterinarioBDD = await Veterinario.findById(id).lean().select("-password")
        next()
    } catch (error) {
        //Mandar mensajes de error
        const e = new Error("Formato del token no válido")
        return res.status(404).json({msg:e.message})
    }
}

export default verificarAutenticacion