import { Curso, CursoPropiedades } from "../Curso/Curso";
import { ExperienciaDeTrabajo, ExperienciaDeTrabajoPropiedades } from "../ExperienciaDeTrabajo/ExperienciaDeTrabajo";
import { Habilidad, HabilidadPropiedades } from "../Habilidad/Habilidad";
import { Referencia, ReferenciaPropiedades } from "../Referencia/Referencia";
import { Direccion, DireccionPropiedades } from "../valueObjectsComunes/Direccion";
import { NombreCompleto, NombreCompletoPropiedades } from "../valueObjectsComunes/NombreCompleto";
import { Telefono, TelefonoPropiedades } from "../valueObjectsComunes/Telefono";
import { EmpleadoPropiedades } from "./Empleado";
import { Clasificacion } from "./ValueObjects/Clasificacion";
import { EstadoEmpleado } from "./ValueObjects/EstadoEmpleado";
import { FechaNacimiento } from "./ValueObjects/FechaNacimiento";
import { NivelEducativo } from "./ValueObjects/NivelEducativo";

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