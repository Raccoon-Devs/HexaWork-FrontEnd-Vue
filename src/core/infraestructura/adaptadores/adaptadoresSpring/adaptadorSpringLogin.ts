import axios from "axios";
import { APIPuertoLogin } from "../../../aplicacion/api/login/APIPuertoLogin";

export class AdaptadorSpringLogin implements APIPuertoLogin{

    private url = "http://hexawork-backend.herokuapp.com/login"

    public async iniciarSesion(datos: {correo: string, password: string}){

        const params = {username: datos.correo, password: datos.password}
        
        await axios
        .post(this.url, params, { withCredentials: true })
        .then((res) => {
            console.log(res)
        })
        
    }
}