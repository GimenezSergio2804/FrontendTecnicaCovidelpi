import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AlertasService {
  public url: any;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  mostrar_alertas( token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.get(this.url + 'alertas/' + 'mostrar_alertas', {
      headers: headers,
    });
  }

  crear_alerta( data:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.post(this.url + 'alertas/' + 'crear_alerta', data,{
      headers: headers,
    });
  }

  mostrar_alertas_pendientes( token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.get(this.url + 'alertas/' + 'mostrar_alertas_pendientes', {
      headers: headers,
    });
  }

  actualizar_alerta(id:any , data:any,token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.put(this.url + 'alertas/' + 'actualizar_alerta/'+id, data,{
      headers: headers,
    });
  }

  obtener_alerta_id( id:any ,token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.get(this.url + 'alertas/' + 'obtener_alerta_id/'+id, {
      headers: headers,
    });
  }

  finalizar_alerta(id:any , data:any,token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.put(this.url + 'alertas/' + 'finalizar_alerta/'+id, data,{
      headers: headers,
    });
  }


}
