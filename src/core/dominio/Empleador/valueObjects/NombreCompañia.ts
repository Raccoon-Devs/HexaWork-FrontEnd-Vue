interface NombreCompañiaPropiedades {
    nombre: String,
    rif: String
}

export class NombreCompañia extends ValueObject<NombreCompañiaPropiedades> {
    constructor (propiedades: TituloOfertaPropiedades) {
        super(propiedades)
        //this.titulo = props.titulo
    }
    public static create(nombre: string, rif: string){
        if(
            nombre === "" || nombre === null || nombre === undefined ||
            rif === "" || rif === null || rif === undefined ||
        ){
            console.log("Error")
        }
        return new NombreConpañia({
            nombre: nombre,
            rif: rif
        })
    }
}
