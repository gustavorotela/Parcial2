import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  usuario:Usuario;

  constructor(private route:Router) { 
    this.usuario = new Usuario();
  }

  deslogear()
  {
    localStorage.clear();
    this.route.navigate(["/Login"]);
  }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

}
