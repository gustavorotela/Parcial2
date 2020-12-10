import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-borrar-alumno',
  templateUrl: './borrar-alumno.component.html',
  styleUrls: ['./borrar-alumno.component.scss']
})
export class BorrarAlumnoComponent implements OnInit {

  usuario:Usuario;
  listaUsuarios = [];
  listaMaterias = [];

  constructor(private miHttp:MiHttpService) {
    this.usuario = new Usuario()
  }

  borrarAlumno(alumno)
  {
    for (let i = 0; i < this.listaMaterias.length; i++) {
      try {
        for (let j = 0; j < this.listaMaterias[i].alumnos.length; j++) {
          if(this.listaMaterias[i].alumnos[j].email == alumno.email)
          {
            this.listaMaterias[i].alumnos.splice(j,1);
            this.miHttp.modificarMateria(this.listaMaterias[i],this.listaMaterias[i].id.toString());
          }
        }
      }
      catch(error){
        try{
          if(this.listaMaterias[i].alumnos.email == alumno.email)
          {
            this.listaMaterias[i].alumnos.splice(0,1);
            this.miHttp.modificarMateria(this.listaMaterias[i],this.listaMaterias[i].id.toString());
          }
        }
        catch(error){}
      }
    }
    let hoy = new Date();
    let mes = hoy.getMonth() + 1;
     
    alumno.fechaBorrado = hoy.getFullYear().toString() + '-' + mes.toString() + "-" + hoy.getDate().toString();
    this.miHttp.alumnosBorrados(alumno,alumno.id.toString());
  }

  ngOnInit(): void {
    this.miHttp.traerUsuario().subscribe( usuarios => {
      for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].tipo == 1)
          this.listaUsuarios.push(usuarios[i]);
      }
    });
    this.miHttp.traerMaterias().subscribe( materias => {
      this.listaMaterias = materias;
    });
  }

}
