import { Nota } from './nota';

export class Examen {
    id:number;
    materia:string;
    cuatrimestre:number;
    anio:number;
    profesor:string;
    fecha:Date;
    nota:Nota[];
}
