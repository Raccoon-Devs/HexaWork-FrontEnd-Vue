interface RolPropiedades {
    nombre: string
}

export class Rol extends ValueObject<RolPropiedades> {
    constructor (propiedades: RolPropiedades) {
        super(propiedades)
    }
    public static create(
        nombre: string
    ){
        if(
            validateStringsExists([nombre])
        ){
            console.log("Error")
        }
        return new Rol({
            nombre: string
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
