import { APIPuertoLogin } from "../../api/login/APIPuertoLogin";

export abstract class UIPuertoLogin{
    abstract autenticarUsuarioUI(oferta: any, apiPuertoLogin: APIPuertoLogin) : any;
}