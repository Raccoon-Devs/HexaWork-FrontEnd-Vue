import { APIPuertoLogin } from "../../../aplicacion/api/login/APIPuertoLogin";

export class AdaptadorTULogin implements APIPuertoLogin{

    public iniciarSesion(datos: {correo: string, password: string}){
        
        return "Login Exitoso"
    }
}