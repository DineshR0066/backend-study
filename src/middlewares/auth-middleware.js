const jwt = require('jsonwebtoken');

require('dotenv').config();
module.exports = async (req, res, next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
       return res.status(400).json({message: "authorization failed"});
    }
    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
        req.user = decoded;
        next();
    }
    catch(error){
        res.status(400).json({
            message:"token invalid"
        })
    }
     
}  
