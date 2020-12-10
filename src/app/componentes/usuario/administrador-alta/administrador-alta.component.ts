import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-administrador-alta',
  templateUrl: './administrador-alta.component.html',
  styleUrls: ['./administrador-alta.component.scss']
})
export class AdministradorAltaComponent implements OnInit {

  usuario:Usuario;
  pass2:string;
  listaUsuarios;
  emailExiste:boolean;
  id:number;
  msgs : any = [];

  constructor(private miHttp:MiHttpService, private router:Router) { 
    this.usuario = new Usuario();
  }

  registrar()
  {
    this.emailExiste = false;
    if(this.usuario.password == this.pass2)
    {
      if(this.usuario.email.indexOf('@') == -1)
      {
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'Error', detail:'Email incorrecto'});
      }
      else{
        for (let i = 0; i < this.listaUsuarios.length; i++) {
          if(this.usuario.email == this.listaUsuarios[i].email)
            this.emailExiste = true;
        }
        if(this.emailExiste){
          //error
        }
        else
        {
          this.usuario.tipo = 3;
          this.usuario.id = this.id;
          this.miHttp.cargarUsuario(this.usuario,this.id.toString());
        }
      }
    }
    else
    {
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Error', detail:'Las contraseñas no coinciden.'});
    }
  }

  ngOnInit(): void {
    this.miHttp.traerUsuario().subscribe( usuarios => {
      this.listaUsuarios = usuarios;
    });
    this.miHttp.ultimoIdUsuario().subscribe( data => {
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
