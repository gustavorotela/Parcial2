import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MiHttpService } from './mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProfesorAuthGuard implements CanActivate {

  constructor(private miHttp:MiHttpService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const url: string = state.url;
      return this.checkLogin(url)
  }

  checkLogin(url:string):boolean{
    var aux = this.miHttp.esProfesor();
    
    if(aux == true)
      return true;

    this.router.navigate(["/NoTienePermiso"]);
    return false;
  }
  
}
