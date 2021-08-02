export function autenticar(datos: {correo: string, password: string}):any{
    
    return datos.correo == "correo@gmail.com" && datos.password == "12345678"
}
