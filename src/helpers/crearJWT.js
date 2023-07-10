import jwt from "jsonwebtoken";

const generarJWT = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"})
}
//Exportación por default de la función
export default  generarJWT