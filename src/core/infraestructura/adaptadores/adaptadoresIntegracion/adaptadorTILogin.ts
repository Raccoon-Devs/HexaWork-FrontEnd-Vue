import { APIPuertoLogin } from "../../../aplicacion/api/login/APIPuertoLogin";
import { autenticar } from "./../../persistencia/loginTI";

export class AdaptadorTILogin implements APIPuertoLogin{

    public iniciarSesion(datos: {correo: string, password: string}){
        
        if (!autenticar(datos)) return "Correo o contraseña inválido"
        return "Login Exitoso"
    }
}