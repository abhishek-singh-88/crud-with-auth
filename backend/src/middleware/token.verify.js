import jwt from 'jsonwebtoken'

const validateUser = async (req, res, next) =>{
    try {
        const {auth_token} = req.cookies
        // console.log(auth_token);
        if(auth_token == undefined){
            res.status(401).json({message:"UnAuthorized ! may be token has expired", success:false})
            console.log("hello");
            
        }else{
        const decoded = jwt.verify(auth_token, process.env.SECRET_KEY)
        console.log(decoded);
            // console.log(decoded);
            req.user = decoded
            next()
    }
    } catch (error) {
        console.log("Error in token : ",error.message );
        res.status(401).json({message:"UnAuthorized ! ", success: false, error: error.message})

    }
}


export default validateUser