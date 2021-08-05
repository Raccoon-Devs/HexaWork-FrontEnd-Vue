import { APIPuertoLogin } from "../../api/login/APIPuertoLogin";
import { UIPuertoLogin } from "../../ui/login/UIPuertoLogin";

export class Autenticar extends UIPuertoLogin{

    public autenticarUsuarioUI(datosLogin: {correo: string, password:string}, apiPuerto: APIPuertoLogin){

        try{
            
            return this.autenticarUsuarioAPI(apiPuerto, datosLogin)
        }
        catch(error){
            return error.mensaje
        }

    }

    public autenticarUsuarioAPI(apiPuerto: APIPuertoLogin, datosLogin: {correo: string, password:string}):void{
        
        return apiPuerto.iniciarSesion(datosLogin)
    }
    
}