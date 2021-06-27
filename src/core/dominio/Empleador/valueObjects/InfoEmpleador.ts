interface InfoEmpleadorPropiedades {
    nombreCompleto: string,
    cargoDeTrabajo: string,
    numeroDeTelefono: string,
    correo: string
}

export class InfoEmpleador extends ValueObject<InfoEmpleadorPropiedades> {
    constructor (propiedades: InfoEmpleadorPropiedades) {
        super(propiedades)
    }
    public static create(
        nombreCompleto: string,
        cargoDeTrabajo: string,
        numeroDeTelefono: string,
        correo: string
    ){
        if(
            validateStringsExists([calle1, calle2, ciudad, estado, zip])
        ){
            console.log("Error")
        }
        return new InfoEmpleador({
            nombreCompleto: string,
            cargoDeTrabajo: string,
            numeroDeTelefono: string,
            correo: string
        })
    }
    private validateStringsExists(stringsToCompare: [string]): boolean {
        const validStrings = stringsToCompare.map(s => {
            if (s === "" || s === null || s === undefined) {
                return false
            } else{
                return true
            }
        })
        if validStrings.indexOf(false) > -1 {
            return false
        }else {
            return true
        }
    }
}
