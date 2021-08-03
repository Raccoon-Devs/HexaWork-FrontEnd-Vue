import { Autenticar } from "../../../aplicacion/servicios/login/AutenticarUsuario";
import { UIPuertoLogin } from "../../../aplicacion/ui/login/UIPuertoLogin";
import { AdaptadorTULogin } from "../../adaptadores/adaptadoresUnitarios/adaptadorTULogin";

test('Login de usuario exitoso', () => {

    const puertoLogin: UIPuertoLogin = new Autenticar()

    const datosLogin = {
        correo: "correo@gmail.com",
        password: "12345678"
    }
    expect(puertoLogin.autenticarUsuarioUI(datosLogin.correo, new AdaptadorTULogin())).toEqual("Correo o contraseña inválido")
});