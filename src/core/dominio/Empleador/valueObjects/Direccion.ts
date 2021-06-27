interface DireccionPropiedades {
    calle1: string,
    calle2: string,
    ciudad: string,
    estado: string,
    zip: string
}

export class Direccion extends ValueObject<DireccionPropiedades> {
    constructor (propiedades: DireccionPropiedades) {
        super(propiedades)
        //this.titulo = props.titulo
    }
    public static create(calle1: string, calle2: string, ciudad: string, estado: string, zip: string){
        if(
            validateStringsExists([calle1, calle2, ciudad, estado, zip])
        ){
            console.log("Error")
        }
        return new Direccion({
            calle1: string,
            calle2: string,
            ciudad: string,
            estado: string,
            zip: string
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
