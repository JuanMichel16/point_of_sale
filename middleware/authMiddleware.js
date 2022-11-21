import jwt from "jsonwebtoken";
import User from "../model/User.js";

const isAuth = async (req, res, next) => {
    let token;
    
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        console.log("Si hay token con bearer");
    } {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select("-password -token -confirmado")

            console.log(req.user);

            return next()

        } catch (error) {
            const e = new Error("Token no valido o inexistente");
            res.status(403).json({msg: e.message})
        }
    }

    if(!token) {
        const error = new Error("Token no valido");
        res.status(403).json({msg: error.message})
    }

    return next()
};

export default isAuth;