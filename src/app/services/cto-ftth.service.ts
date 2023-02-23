import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CtoFtthService {

   public url;

  constructor(private _http: HttpClient,
) { 
    this.url = GLOBAL.url;
  }

  crear_cto(data:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.post(this.url + 'cto-ftth/' + 'crear_cto', data, {
      headers: headers,
    });
  }

  cto_mostrar( token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.get(this.url + 'cto-ftth/' + 'cto_mostrar', {
      headers: headers,
    });
  }

  cto_obtener(id:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.get(this.url + 'cto-ftth/' + 'cto_obtener/'+ id, {
      headers: headers,
    });
  }

  cto_actualizar(id:any, data:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.put(this.url + 'cto-ftth/' + 'cto_actualizar/'+id,data, {
      headers: headers,
    });
  }

  cto_eliminar(id:any, token:any): Observable<any> {
    let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
    return this._http.delete(this.url + 'cto-ftth/' + 'cto_eliminar/'+ id, {
      headers: headers,
    });
  }


}
