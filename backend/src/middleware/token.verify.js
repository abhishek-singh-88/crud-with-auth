import jwt from 'jsonwebtoken'

const validateUser = async (req, res, next) =>{
    try {
        const {auth_token} = req.cookies
        const decoded = await jwt.verify(auth_token, process.env.SECRET_KEY)
        if(decoded){
            console.log(decoded);
            req.user = decoded
            next()
        }
       else{
        res.status(401).json({message:"UnAuthorized ! "})
       }
    } catch (error) {
        console.log("Error in token : ",error.message);
    }
}


export default validateUser