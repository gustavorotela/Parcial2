import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { Usuario } from 'src/app/clases/usuario';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-actas-de-examen',
  templateUrl: './actas-de-examen.component.html',
  styleUrls: ['./actas-de-examen.component.scss']
})
export class ActasDeExamenComponent implements OnInit {

  profesor:Usuario;
  listaExamenes = [];
  examenesMateria = [];
  examenosMateriasNoDirecta = [];

  constructor(private miHttp:MiHttpService) { 
    this.profesor = new Usuario();
  }

  materiaSeleccionada(materia)
  {
    for (let i = 0; i < this.listaExamenes.length; i++) {
      if(this.listaExamenes[i].materia == materia.nombre && this.listaExamenes[i].cuatrimestre == materia.cuatrimestre && this.listaExamenes[i].anio == materia.anio)
      {
        for (let j = 0; j < this.listaExamenes[i].nota.length; j++) {
          
          if(this.listaExamenes[i].nota[j].nota >= 7)
          {
            this.examenesMateria.push(this.listaExamenes[i].nota[j]);
          }
          else
          {
            this.examenosMateriasNoDirecta.push(this.listaExamenes[i].nota[j]);
          }
        }
      }
    }
    console.log(this.examenesMateria);
  }

  ngOnInit(): void {
    this.profesor = JSON.parse(localStorage.getItem('usuario'));
    this.miHttp.traerExamenes().subscribe( examenes => {
      this.listaExamenes = examenes;
    });
  }

}
