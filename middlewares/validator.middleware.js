const  jwt= require("jsonwebtoken");
require("dotenv").config();


const validator = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.key);
            if (decoded) {
                const role = decoded.role;
                req.body.role = role;
                if (req.method === "POST" || req.method === "PUT") {
                    if (role === 'Admin' || role === 'Author') {
                        next();
                    } else {
                        console.log({ error: "Not Authorized" });
                        res.status(403).send({ error: "Not Authorized" }); 
                    }
                } else if (req.method === "DELETE") {
                    if (role === 'Admin') {
                        next();
                    } else {
                        console.log({ error: "Not Authorized" });
                        res.status(403).send({ error: "Not Authorized" });
                    }
                } else {
                    next();
                }
            } else {
                res.status(401).send({ message: "Please login first" }); 
            }
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: "Internal Server Error" }); 
        }
    } else {
        res.status(401).send({ message: "Please login first" });
    }
}




module.exports= {
    validator
}