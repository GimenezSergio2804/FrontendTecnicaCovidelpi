import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private _usuarioService : UsuariosService,
    private _router : Router
  ) {

  }



  canActivate():any {
    if (!this._usuarioService.isAuthenticated(['ADMIN'])) {
      this._router.navigate(['']);
      return false;
    }
    return true;
  }

}
