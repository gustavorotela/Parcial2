import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Usuario } from 'src/app/clases/usuario';
import { Observable } from 'rxjs';
import { Materia } from '../clases/materia';
import { Examen } from '../clases/examen';
import { AngularFireStorage} from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class MiHttpService {

  respuestasAFL : AngularFireList<any>;
  respuestasObservable : Observable<any>;
  usuario:Usuario;

  constructor(public afAuth : AngularFireAuth, public afDB : AngularFireDatabase, public afStorage : AngularFireStorage) {
    this.usuario = new Usuario();
  }

  cargarUsuario(usuario:Usuario,id:string)
  {
    const listadoUsuarios = this.afDB.list("/Usuarios/");
    listadoUsuarios.set(id,usuario);
  }

  traerUsuario()
  {
    this.respuestasAFL = this.afDB.list("/Usuarios");
    this.respuestasObservable = this.respuestasAFL.valueChanges();
    return this.respuestasObservable;
  }

  ultimoIdUsuario()
  {
    this.respuestasAFL = this.afDB.list("/Usuarios",ref => ref.limitToLast(1));
    this.respuestasObservable = this.respuestasAFL.valueChanges();
    return this.respuestasObservable;
  }

  estaLogeado()
  {
    return localStorage.getItem('login');
  }

  esAdmin()
  {
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
    if(this.usuario.tipo == 3)
      return true;
    else
      return false;
  }

  esProfesor()
  {
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
    if(this.usuario.tipo == 2)
      return true;
    else
      return false;
  }

  cargarImagenMateria(materia:Materia,id:string,image)
  {
    this.afStorage.upload(materia.nombre,image);
  }

  cargarMateria(materia:Materia,id:string)
  {
    /*const listadoMaterias = this.afDB.list("/Materias/");
    listadoMaterias.set(id,materia);  */
    this.afStorage.ref(materia.nombre).getDownloadURL().subscribe(url => { 
      materia.foto = url;
      const listadoMaterias = this.afDB.list("/Materias/");
      listadoMaterias.set(id,materia);  
    });
  }

  ultimoIdMateria()
  {
    this.respuestasAFL = this.afDB.list("/Materias",ref => ref.limitToLast(1));
    this.respuestasObservable = this.respuestasAFL.valueChanges();
    return this.respuestasObservable;
  }

  traerMaterias()
  {
    this.respuestasAFL = this.afDB.list("/Materias");
    this.respuestasObservable = this.respuestasAFL.valueChanges();
    return this.respuestasObservable;
  }

  modificarMateria(materia:Materia,id:string)
  {
    this.respuestasAFL = this.afDB.list("/Materias");
    this.respuestasAFL.update(id,materia);
  }

  alumnosBorrados(alumno:Usuario,id:string)
  {
    this.respuestasAFL = this.afDB.list("/Usuarios");
    this.respuestasAFL.remove(id);
    const resultadosAgilidad = this.afDB.list("/AlumnosBorrados/");
    resultadosAgilidad.push(alumno);
  }

  traerAlumnosBorrados()
  {
    this.respuestasAFL = this.afDB.list("/AlumnosBorrados");
    this.respuestasObservable = this.respuestasAFL.valueChanges();
    return this.respuestasObservable;
  }

  cargarExamen(examen:Examen,id:string)
  {
    const listadoExamenes = this.afDB.list("/Examenes/");
    listadoExamenes.set(id,examen);
  }

  ultimoIdExamen()
  {
    this.respuestasAFL = this.afDB.list("/Examenes",ref => ref.limitToLast(1));
    this.respuestasObservable = this.respuestasAFL.valueChanges();
    return this.respuestasObservable;
  }

  traerExamenes()
  {
    this.respuestasAFL = this.afDB.list("/Examenes");
    this.respuestasObservable = this.respuestasAFL.valueChanges();
    return this.respuestasObservable;
  }
}
