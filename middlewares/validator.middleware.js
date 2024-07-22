const  jwt= require("jsonwebtoken");
require("dotenv").config();


const validator= (req, res, next)=>{
    const  token= req.headers.authorization;
    if(token){
        const decoded= jwt.verify(token, process.env.key);
        if(decoded){
            const role= decoded.role;
            req.body.role= role;
            if(req.method==="POST" || req.method==="PUT"){
                if(role==='Admin' || role==='Author'){
                    next();
                }else{
                    console.log({"error": "Not Authorized"});
                    res.send({"Error": "Not Authorized"});
                }
            }else if(req.method==="DELETE"){
                if(role==='Admin'){
                    next();
                }else{
                    console.log({"error": "Not Authorized"});
                    res.send({"Error": "Not Authorized"});
                }
            }else{
                next();
            }
        }else{
            res.send({"message" : "Please login first"});
        }
    }else{
        res.send({"message" : "Please login first"});
    }
}

module.exports= {
    validator
}