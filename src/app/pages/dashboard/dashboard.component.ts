import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public alertas:Array<any> = [

  ]
  public token:any ; 

  constructor(private _alertaService : AlertasService,
              private _usuarioService : UsuariosService,
              private _router : Router)
              {
                this.token = this._usuarioService.getToken()
               }

  ngOnInit(): void {
    this._alertaService.mostrar_alertas_pendientes(this.token).subscribe(
      response => {
        this.alertas = response.data;
      }, error => {
        console.log(error)
      }
    )
  }


}
