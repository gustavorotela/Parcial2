import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-materias-profesor',
  templateUrl: './materias-profesor.component.html',
  styleUrls: ['./materias-profesor.component.scss']
})
export class MateriasProfesorComponent implements OnInit {

  profesor:Usuario;
  listaMaterias = [];

  constructor(private miHttp:MiHttpService) {
    
  }

  ngOnInit(): void {

    this.profesor = JSON.parse(localStorage.getItem('usuario'));

    this.miHttp.traerMaterias().subscribe( materias => {
      for (let i = 0; i < materias.length; i++) {
        if(materias[i].profesor == materias.email)
        {
          this.listaMaterias.push(materias[i]);
        }
      }
    })
  }
}