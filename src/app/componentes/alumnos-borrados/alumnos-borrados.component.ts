import { Component, OnInit } from '@angular/core';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-alumnos-borrados',
  templateUrl: './alumnos-borrados.component.html',
  styleUrls: ['./alumnos-borrados.component.scss']
})
export class AlumnosBorradosComponent implements OnInit {

  alumnosBorrados = [];

  constructor(private miHttp:MiHttpService) { }

  ngOnInit(): void {
    this.miHttp.traerAlumnosBorrados().subscribe( alumnos => {
      this.alumnosBorrados = alumnos;
    })
  }

}
