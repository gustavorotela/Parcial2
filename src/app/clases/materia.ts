import { Usuario } from './usuario';

export class Materia {
    id:number;
    nombre:string;
    cuatrimestre:number;
    cupo:number;
    anio:number;
    profesor:Usuario[];
    foto:string;
    alumnos:Usuario[];
}
