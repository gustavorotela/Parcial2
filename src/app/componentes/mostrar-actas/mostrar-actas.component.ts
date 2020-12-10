import { Component, OnInit } from '@angular/core';
import { Examen } from 'src/app/clases/examen';
import { Nota } from 'src/app/clases/nota';
import { Usuario } from 'src/app/clases/usuario';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-mostrar-actas',
  templateUrl: './mostrar-actas.component.html',
  styleUrls: ['./mostrar-actas.component.scss']
})
export class MostrarActasComponent implements OnInit {

  usuario:Usuario;
  listaExamenes = [];
  nota:Nota;
  detalle:Examen;
  ocultar:boolean = true;

  constructor(private miHttp:MiHttpService) { 
    this.nota = new Nota();
    this.detalle = new Examen();
  }

  mostrarDetalle(examen)
  {
    for (let i = 0; i < examen.nota.length; i++) {
      if(examen.nota[i].alumno == this.usuario.email)
      {
        this.nota.alumno = examen.nota[i].alumno;
        this.nota.nota = examen.nota[i].nota;
      }
    }
    this.detalle = examen;
    console.log(this.nota.alumno);
    console.log(this.detalle);
    this.ocultar = false;
  }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.miHttp.traerExamenes().subscribe( examenes => {
      for (let i = 0; i < examenes.length; i++) {
        for (let j = 0; j < examenes[i].nota.length; j++) {
          if(examenes[i].nota[j].alumno == this.usuario.email)
          {
            this.listaExamenes.push(examenes[i]);
          }
        }
      }
    })
  }

}
