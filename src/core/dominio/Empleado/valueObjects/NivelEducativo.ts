import { ValueObject } from "../../ClasesBase/ValueObject"
import { ExcepcionNivelEducativoInvalido } from '../excepciones/ExcepcionNivelEducativoInvalido'

interface NivelEducativoPropiedades {
    nivelEducativo: number
}

export class NivelEducativo extends ValueObject<NivelEducativoPropiedades> {

    constructor (propiedades: NivelEducativoPropiedades) {
        super(propiedades)
    }

    obtenerNivelEducativo(): number {
        return this.propiedades.nivelEducativo
    }

    public static crear(nivelEducativo: number): NivelEducativo {
        
        if(nivelEducativo === null || nivelEducativo === undefined){
            throw new ExcepcionNivelEducativoInvalido<typeof nivelEducativo >(`El nivel educativo: ${nivelEducativo} no puede estar vacio`, nivelEducativo)
        }

        if(!(nivelEducativo in [0, 1, 2, 3, 4, 5 ,6, 7, 8, 9, 10])){
            throw new ExcepcionNivelEducativoInvalido<typeof nivelEducativo >(
                `El nivel educativo: ${nivelEducativo} del empleado debe ser: 
                0 (Niguno), 1 (Escuela Primaria),
                2 (Algún Instituto), 3 (Escuela Secundaria),
                4 (Algún Estudio Universitario), 5 (Grado Asociado),
                6 (Licenciatura), 7 (Algún Estudio de Postgrado),
                8 (Maestría), 9 (Doctorado), 10 (título Profesional)`
                , nivelEducativo)
        }

        return new NivelEducativo({nivelEducativo})
    }
}
