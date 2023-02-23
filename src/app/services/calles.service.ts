import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallesService {

  public url;

  constructor(private _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  calles_mostrar( token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.get(this.url + 'calles/' + 'calles_mostrar', {
      headers: headers,
    });
  }

  calle_registro(data:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.post(this.url + 'calles/' + 'calle_registro', data, {
      headers: headers,
    });
  }

  calle_obtener(id:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.get(this.url + 'calles/' + 'calle_obtener/'+ id, {
      headers: headers,
    });
  }

  calle_actualizar(id:any, data:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.put(this.url + 'calles/' + 'calle_actualizar/'+id,data, {
      headers: headers,
    });
  }

  calle_eliminar(id:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.delete(this.url + 'calles/' + 'calle_eliminar/'+ id, {
      headers: headers,
    });
  }


}
