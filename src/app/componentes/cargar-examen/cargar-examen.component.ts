import { Component, OnInit } from '@angular/core';
import { Examen } from 'src/app/clases/examen';
import { Materia } from 'src/app/clases/materia';
import { Nota } from 'src/app/clases/nota';
import { Usuario } from 'src/app/clases/usuario';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-cargar-examen',
  templateUrl: './cargar-examen.component.html',
  styleUrls: ['./cargar-examen.component.scss']
})
export class CargarExamenComponent implements OnInit {

  id:number;
  listaMaterias = [];
  profesor:Usuario;
  alumnoSeleccionado:Usuario;
  examen:Examen;
  materiaSeleccionada:Materia;
  ocultarAlumnos:boolean = true;
  ocultarExamen:boolean = true;
  listaAlumnos = [];
  nota:Nota;

  constructor(private miHttp:MiHttpService) {
    this.profesor = new Usuario();
    this.examen = new Examen();
    this.materiaSeleccionada = new Materia();
    this.alumnoSeleccionado = new Usuario();
    this.nota = new Nota();
    this.examen.nota = this.examen.nota || [];
  }

  cargarExamen()
  {
    this.examen.profesor = this.profesor.email;
    this.examen.materia = this.materiaSeleccionada.nombre;
    this.examen.cuatrimestre = this.materiaSeleccionada.cuatrimestre;
    this.examen.anio = this.materiaSeleccionada.anio;
    this.nota.alumno = this.alumnoSeleccionado.email;
    this.examen.nota.push(this.nota);
  }

  finalizarCarga()
  {
    this.miHttp.cargarExamen(this.examen,this.id.toString())
  }

  seleccionarMateria(materia)
  {
    this.ocultarAlumnos = false;
    this.materiaSeleccionada = materia;
    this.listaAlumnos = this.materiaSeleccionada.alumnos;
  }

  seleccionarAlumno(alumno)
  {
    this.ocultarExamen = false;
    this.alumnoSeleccionado = alumno;
  }

  ngOnInit(): void {
    this.profesor = JSON.parse(localStorage.getItem("usuario"));
    this.miHttp.traerMaterias().subscribe( materias => {
      for (let i = 0; i < materias.length; i++) {
        let profesor = materias[i].profesor
        for (let j = 0; j < profesor.length; j++) {
          if(profesor[j].email == this.profesor.email)
          {
            this.listaMaterias.push(materias[i]);
          } 
        } 
      }
    });
    this.miHttp.ultimoIdExamen().subscribe( data => {
      if(data == "")
        this.id = 1
      else
      {
        this.id = data[0].id;
        this.id++;
      }
    });
  }

}
