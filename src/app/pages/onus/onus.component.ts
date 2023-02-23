import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnusService } from 'src/app/services/onus.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-onus',
  templateUrl: './onus.component.html',
  styleUrls: ['./onus.component.css']
})
export class OnusComponent implements OnInit {

  public onus : Array<any>=[];
  public load_data = true;

  public page = 1;
  public pageSize = 50;
  public token:any ;

  constructor(
    private _onusService : OnusService,
    private _usuariosService : UsuariosService,
    private _router : Router,
  ) { 
    this.token = this._usuariosService.getToken();
  }

  ngOnInit(): void {
    this._onusService.onu_mostrar(this.token).subscribe(
      response => {
        this.onus = response.data;
        this.load_data = false;
      }, error => {
        console.log(error)
      }
    )
  }

  eliminar(id:any) {
    this._onusService.onu_eliminar(id, this.token).subscribe(
      response=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: response.message,
          showConfirmButton: false,
          timer: 1500
        })
        $('#delete-'+id).modal('hide');
        $('.modal-backdrop').removeClass('show');

        this._onusService.onu_mostrar(this.token).subscribe(
          response => {
            this.onus = response.data;
            this.load_data = false;
            console.log(response)
          }, error => {
            console.log(error)
          }
        )


      } ,error => {

      }
    )
  }

}
