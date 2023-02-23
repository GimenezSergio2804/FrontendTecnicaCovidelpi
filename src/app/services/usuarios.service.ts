import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  public url;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  login_usuario(data: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'usuarios/' + 'login_usuario', data, {
      headers: headers,
    });
  }

  getToken() {
    return localStorage.getItem('token');
  }

  public isAuthenticated(allowRoles: string[]): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    try {
      const helper = new JwtHelperService();
      var decodedToken = helper.decodeToken(<any>token);

      if (!decodedToken) {
        console.log('No es Valido');
        localStorage.removeItem('token');
        return false;
      }
    } catch (error) {
      localStorage.removeItem('token');
      return false;
    }

    return allowRoles.includes(decodedToken['role']);
  }

  listar_usuarios_filtro_admin(tipo:any, filtro:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.get(this.url + 'usuarios/' + 'listar_usuarios_filtro_admin/'+tipo+'/'+filtro, {
      headers: headers,
    });
  }

  registro_usuario_admin(data:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.post(this.url + 'usuarios/' + 'registro_usuario_admin', data, {
      headers: headers,
    });
  }

  obtener_usuario_admin(id:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.get(this.url + 'usuarios/' + 'obtener_usuario_admin/'+id ,{
      headers: headers,
    });
  }

  actualizar_usuario_admin(id:any,data:any ,token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.put(this.url + 'usuarios/' + 'actualizar_usuario_admin/'+id , data,{
      headers: headers,
    });
  }

  eliminar_usuario_admin(id:any,token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.delete(this.url + 'usuarios/' + 'eliminar_usuario_admin/'+id,{
      headers: headers,
    });
  }

  


}
