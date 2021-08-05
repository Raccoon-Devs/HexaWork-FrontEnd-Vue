import { Curso, CursoPropiedades } from "../curso/Curso";
import { ExperienciaDeTrabajo, ExperienciaDeTrabajoPropiedades } from "../experienciaDeTrabajo/ExperienciaDeTrabajo";
import { Habilidad, HabilidadPropiedades } from "../habilidad/Habilidad";
import { Referencia, ReferenciaPropiedades } from "../referencia/Referencia";
import { Direccion, DireccionPropiedades } from "../valueObjectsComunes/Direccion";
import { NombreCompleto, NombreCompletoPropiedades } from "../valueObjectsComunes/NombreCompleto";
import { Telefono, TelefonoPropiedades } from "../valueObjectsComunes/Telefono";
import { EmpleadoPropiedades } from "./Empleado";
import { Clasificacion } from "./valueObjects/Clasificacion";
import { EstadoEmpleado } from "./valueObjects/EstadoEmpleado";
import { FechaNacimiento } from "./valueObjects/FechaNacimiento";
import { NivelEducativo } from "./valueObjects/NivelEducativo";

type EmpleadoParaDominioMap<Type> = {
    [Property in keyof Type]
    : Type[Property] extends NombreCompleto? NombreCompletoPropiedades
    : Type[Property] extends Telefono? TelefonoPropiedades
    : Type[Property] extends FechaNacimiento? Date
    : Type[Property] extends NivelEducativo? number
    : Type[Property] extends ExperienciaDeTrabajo[]? ExperienciaDeTrabajoPropiedades[]
    : Type[Property] extends Habilidad[]? HabilidadPropiedades[]
    : Type[Property] extends Curso[]? CursoPropiedades[]
    : Type[Property] extends Referencia[]? ReferenciaPropiedades[]
    : Type[Property] extends Clasificacion? number
    : Type[Property] extends EstadoEmpleado? number
    : Type[Property] extends Direccion? DireccionPropiedades
    : string;
}

export type EmpleadoParaDominio = EmpleadoParaDominioMap<EmpleadoPropiedades>