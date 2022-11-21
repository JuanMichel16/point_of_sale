import jwt from 'jsonwebtoken';

const generarJWT = (id) => {

    // const userInformation = {
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     userName: user.userName,
    // }

    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "10d",
    });
}

export default generarJWT;