export abstract class APIPuertoLogin{
    abstract iniciarSesion(datos: {correo: string, password:string}): any

}