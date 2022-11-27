import User from "../model/User.js";
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarId.js";


const registrar = async (req, res) => {

    const { email } = req.body;
    // const {firstName, lastName, userName, password, email, rol } = req.body;
    // console.log(firstName, lastName, userName, password, email, rol); //Para leer los parametros enviados

    // Prevenir usuarios duplicados
    const existsUser = await User.findOne({email});     

    if(existsUser) {
        const error = new Error('Usuario ya registrado');
        return res.status(400).json({msg: error.message});
    }

    try {
        // guardar nuevo veterinario
        const user = new User(req.body);
        const veterinarioGuardado = await user.save();
        res.json(veterinarioGuardado);
        
    } catch (error) {
        console.log(error);
    }
}

const perfil = (req, res) => {
    const {user} = req;

    res.json({perfil: user})
}

const confirmar = async (req, res) => {
    const { token } = req.params;
    const usuarioConfirmar = await User.findOne({token});

    if(!usuarioConfirmar) {
        const error = new Error("Token no Valido");
        res.status(404).json({mgs: error.message});
    }

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();

        res.json({msg: "Usuario confirmado correctamente"});

    } catch(error) {
        console.log(error)
    }
}

const autenticar = async (req, res) => {

    const {email, password} = req.body;

    const user = await User.findOne({ email });

    // Validar si el usuario existe
    if(!user) {
        const error = new Error("El usuario no existe")
        res.status(403).json({msg: error.message});
    }

    //Validar si el usuario esta confirmado
    if(!(user.confirmado)) {
        const error = new Error("El usuario no esta confirmado");
        res.status(403).json({msg: error.message});
    }

    // Autenticar el usuario
    if(await user.comprobarUsuarioPassword(password)) {
        res.json({token: generarJWT(user.id)})
    } else {
        const error = new Error("El password es incorrecto");
        res.status(403).json({msg: error.message});
    }
}

const olvidePassword = async (req, res) => {
    const { email } = req.body;

    // Verificar si el usuario existe con base en su email. Si no encuentra un usuario con el email retorna null, pero en caso de que si lo encuentre pues retorna el usuario de la DB
    const existsUser = await User.findOne({email});
    
    if(!existsUser) {
        const error = new Error("El usuario no existe");
        res.status(400).json({msg: error.message});
    }

    try {
        existsUser.token = generarId();
        await existsUser.save();

        res.json({msg: "Hemos enviado un email con las instrucciones"})
    } catch (error) {
        console.log(error);
    }
}

const comprobarToken = async (req, res) => {
    const {token} = req.params;

    const existsUser = await User.findOne({token});

    if(existsUser) {
        //El usuario existe
        res.json({msg: "Token valido y el usuario existe"})
    } else {
        // El usuario no existe
        const error = new Error("Token no valido");
        res.status(400).json({msg: error.message});
    }

}

const nuevoPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    
    const user = await User.findOne({token});

    if(!user) {
        const error = new Error("Hubo un error");
        res.status(400).json({msg: error.message});
    }

    try {
        user.token = null;
        user.password = password;
        await user.save();

        res.json({mgs: "Password modificado correctamente"})
    } catch (error) {
        console.log(error);
    }

}

export {
    registrar,
    perfil,
    confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword
}

