
const  jwt= require("jsonwebtoken");
require("dotenv").config();

const Authentication = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.key);
            if (decoded) {
                const userId = decoded.userId;
                req.body.userId = userId;
                next();
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
    Authentication
}