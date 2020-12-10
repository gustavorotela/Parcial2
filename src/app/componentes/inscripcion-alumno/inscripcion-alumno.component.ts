import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { Materia } from 'src/app/clases/materia';
import { Usuario } from 'src/app/clases/usuario';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-inscripcion-alumno',
  templateUrl: './inscripcion-alumno.component.html',
  styleUrls: ['./inscripcion-alumno.component.scss']
})
export class InscripcionAlumnoComponent implements OnInit {

  listaMaterias = [];
  materiasInscriptas = [];
  usuario:Usuario;
  existeEnMateria:boolean = false;
  listaAlumnos = [];
  materia:Materia;

  constructor(private miHttp:MiHttpService, private router:Router) {
    this.usuario = new Usuario();
    this.materia = new Materia();
  }

  inscripcion(materia)
  {
    this.materia = materia;
    this.existeEnMateria = false;
    try{
      for (let i = 0; i < this.materia.alumnos.length; i++) {
        this.listaAlumnos.push(this.materia.alumnos[i]);
      }
      for (let j = 0; j < this.materia.alumnos.length; j++) {
        if(materia.alumnos[j].email == this.usuario.email)
          this.existeEnMateria = true;
      }
      if(this.existeEnMateria == false)
      {
        this.listaAlumnos.push(this.usuario);
        this.materia.alumnos = this.listaAlumnos;
        this.miHttp.modificarMateria(this.materia,this.materia.id.toString());
      }
    }
    catch(error){
      materia.alumnos = materia.alumnos || [];
      materia.alumnos.push(this.usuario);
      this.miHttp.modificarMateria(materia,materia.id.toString());
    }
    const currentRoute = this.router.url;

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]);
    }); 
  }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));

    this.miHttp.traerMaterias().subscribe( materias => {
      for (let i = 0; i < materias.length; i++) {
        this.existeEnMateria = false;
        let alumnos = materias[i].alumnos;
        try{
          for (let j = 0; j < alumnos.length; j++) {
            if(alumnos[j].email == this.usuario.email)
              this.existeEnMateria = true;
          }
          if(this.existeEnMateria == true)
            this.materiasInscriptas.push(materias[i]);  
          else
            this.listaMaterias.push(materias[i]);
        }
        catch(error)
        {
          this.listaMaterias.push(materias[i]);
        }
      }
    });
  }
}
