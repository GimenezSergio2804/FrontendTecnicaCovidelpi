import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CtoFtthService } from 'src/app/services/cto-ftth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

declare var JQuery:any;
declare var $:any;


@Component({
  selector: 'app-cto-ftth',
  templateUrl: './cto-ftth.component.html',
  styleUrls: ['./cto-ftth.component.css']
})
export class CtoFtthComponent implements OnInit {

  public ctos : Array<any>=[];
  public load_data = true;

  public page = 1;
  public pageSize = 50;
  public token:any ;

  constructor(
    private _ctoService : CtoFtthService,
    private _usuariosService : UsuariosService,
    private _router : Router,
  ) { 
    this.token = this._usuariosService.getToken();
  }

  ngOnInit(): void {
    this._ctoService.cto_mostrar(this.token).subscribe(
      response => {
        this.ctos = response.data;
        this.load_data = false;
      }, error => {
        console.log(error)
      }
    )
  }

  eliminar(id:any) {
    this._ctoService.cto_eliminar(id, this.token).subscribe(
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

        this._ctoService.cto_mostrar(this.token).subscribe(
          response => {
            this.ctos = response.data;
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
