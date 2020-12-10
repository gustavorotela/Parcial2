import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario:Usuario;
  listaUsuarios;
  msgs : any = [];

  constructor(private miHttp:MiHttpService, private router:Router) { 
    this.usuario = new Usuario();
  }

  Entrar()
  {
    if(this.usuario.email == "" || this.usuario.password == "")
    {
      console.log("Completar datos");
    }
    else{
      for (let i = 0; i < this.listaUsuarios.length; i++) {
        if(this.listaUsuarios[i].email == this.usuario.email && this.listaUsuarios[i].password == this.usuario.password)
        {
          localStorage.clear();
          localStorage.setItem("login","si");
          localStorage.setItem("usuario",JSON.stringify(this.listaUsuarios[i]))
          this.router.navigate(["/Principal"]);
        }
        else
        {
          this.msgs = [];
          this.msgs.push({severity:'error', summary:'Error', detail:'Datos incorrectos.'});
        }
      }
    }
  }

  Rapido()
  {
    this.usuario.email = "gnrotela@yahoo.com.ar";
    this.usuario.password = "123";
  }

  ngOnInit(): void {
    this.miHttp.traerUsuario().subscribe( usuarios => {
      this.listaUsuarios = usuarios;
    });
  }

}
