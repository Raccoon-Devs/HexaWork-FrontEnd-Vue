import { Identificador } from './Identificador'

export class IDUnicoEntidad extends Identificador<string | number>{
  constructor (id?: string | number) {
    
    super(id ? id : "IdPorDefecto") 
  }
}


// el id por defecto lo cambiara el backend, simplemente se asigna para que el backend
// sepa q lo va a cambiar aunque tambien se puede mandar la oferta sin ID
// hay que discurtirlo