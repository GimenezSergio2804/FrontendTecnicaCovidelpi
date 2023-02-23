import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  public url;

  constructor(private _http: HttpClient) { 
    this.url = GLOBAL.url;}

    abonado_registro(data:any, token:any): Observable<any> {
      let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
      return this._http.post(this.url + 'abonados/' + 'abonado_registro', data, {
        headers: headers,
      });
    }
  
    abonado_mostrar( token:any): Observable<any> {
      let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
      return this._http.get(this.url + 'abonados/' + 'abonado_mostrar', {
        headers: headers,
      });
    }

    abonado_obtener(id:any, token:any): Observable<any> {
      let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
      return this._http.get(this.url + 'abonados/' + 'abonado_obtener/'+ id, {
        headers: headers,
      });
    }

    abonado_actualizar(id:any, data:any, token:any): Observable<any> {
      let headers = new HttpHeaders(({'Content-Type': 'application/json','Authorization':token}));
      return this._http.put(this.url + 'abonados/' + 'abonado_actualizar/'+id,data, {
        headers: headers,
      });
    }
}
