import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CentralesService {

  public url;

  constructor(private _http: HttpClient) { 
    this.url = GLOBAL.url;
  }

  mostrar_centrales_admin( token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.get(this.url + 'centrales/' + 'mostrar_centrales_admin', {
      headers: headers,
    });
  }

  registro_central_admin(data:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.post(this.url + 'centrales/' + 'registro_central_admin', data, {
      headers: headers,
    });
  }

  obtener_central_admin(id:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.get(this.url + 'centrales/' + 'obtener_central_admin/'+ id, {
      headers: headers,
    });
  }

  actualizar_central_admin(id:any, data:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.put(this.url + 'centrales/' + 'actualizar_central_admin/'+id,data, {
      headers: headers,
    });
  }

  eliminar_central_admin(id:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.delete(this.url + 'centrales/' + 'eliminar_central_admin/'+ id, {
      headers: headers,
    });
  }

}
