import { Component, OnInit } from '@angular/core';
import { AlertasService } from 'src/app/services/alertas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-historical-alertas',
  templateUrl: './historical-alertas.component.html',
  styleUrls: ['./historical-alertas.component.css']
})
export class HistoricalAlertasComponent implements OnInit {

  public token:any
  public alertas_data:Array<any>= [];
  public load_data=true;
  public page = 1;
  public pageSize = 5;

  constructor(
    private _usuarioService : UsuariosService,
    private _alertaService : AlertasService
  ) { 
    this.token = this._usuarioService.getToken();
  }

  ngOnInit(): void {
    this._alertaService.mostrar_alertas(this.token).subscribe(
      response => {
        this.alertas_data = response.data;
        console.log(response)
        this.load_data = false;
      }, error => {
        console.log(error)
      }
    )
  }

  pendientes() {
    this._alertaService.mostrar_alertas_pendientes(this.token).subscribe(
      response => {
        this.alertas_data = response.data;
        console.log(response)
        this.load_data = false;
      }, error => {
        console.log(error)
      }
    )
  }

  reload() {
    this._alertaService.mostrar_alertas(this.token).subscribe(
      response => {
        this.alertas_data = response.data;
        console.log(response)
        this.load_data = false;
      }, error => {
        console.log(error)
      }
    )
  }

}
