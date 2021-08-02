import { Autenticar } from "../../../aplicacion/servicios/login/AutenticarUsuario";
import { UIPuertoLogin } from "../../../aplicacion/ui/login/UIPuertoLogin";
import { AdaptadorTILogin } from "../../adaptadores/adaptadoresIntegracion/adaptadorTILogin";

test('Login de usuario fallido', () => {

    const puertoLogin: UIPuertoLogin = new Autenticar()

    const datosLogin = {
        correo: "correo@gmail.com",
        password: "aaaaaa"
    }
    expect(puertoLogin.autenticarUsuarioUI(datosLogin.correo, new AdaptadorTILogin())).toEqual("Correo o contraseña inválido")
});

test('Login de usuario exitoso', () => {

    const puertoLogin: UIPuertoLogin = new Autenticar()

    const datosLogin = {
        correo: "correo@gmail.com",
        password: "12345678"
    }
    expect(puertoLogin.autenticarUsuarioUI(datosLogin.correo, new AdaptadorTILogin())).toEqual("Correo o contraseña inválido")
});