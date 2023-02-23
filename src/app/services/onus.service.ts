import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnusService {

  public url;

  constructor(private _http: HttpClient) { 
    this.url = GLOBAL.url;
  }

  crear_onu(data:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.post(this.url + 'onus/' + 'crear_onu', data, {
      headers: headers,
    });
  }

  onu_mostrar( token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.get(this.url + 'onus/' + 'onu_mostrar', {
      headers: headers,
    });
  }

  onu_obtener(id:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.get(this.url + 'onus/' + 'onu_obtener/'+ id, {
      headers: headers,
    });
  }

  onu_actualizar(id:any, data:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.put(this.url + 'onus/' + 'onu_actualizar/'+id,data, {
      headers: headers,
    });
  }

  onu_eliminar(id:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.delete(this.url + 'onus/' + 'onu_eliminar/'+ id, {
      headers: headers,
    });
  }


}