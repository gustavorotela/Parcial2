import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-mostrar-examenes',
  templateUrl: './mostrar-examenes.component.html',
  styleUrls: ['./mostrar-examenes.component.scss']
})
export class MostrarExamenesComponent implements OnInit {

  listaMaterias = [];
  profesor:Usuario;

  constructor(private miHttp:MiHttpService) {
    this.profesor = new Usuario();
  }

  ngOnInit(): void {
    this.profesor = JSON.parse(localStorage.getItem('usuario'));
    this.miHttp.traerMaterias().subscribe( materias => {
      for (let i = 0; i < materias.length; i++) {
        let profesores = materias[i].profesor;
        for (let j = 0; j < profesores.length; j++) {
          if(profesores[j].email == this.profesor.email)
          {
            this.listaMaterias.push(materias[i]);
          }
        }
      }
    });
  }

}
