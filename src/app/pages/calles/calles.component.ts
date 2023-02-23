import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallesService } from 'src/app/services/calles.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-calles',
  templateUrl: './calles.component.html',
  styleUrls: ['./calles.component.css']
})
export class CallesComponent implements OnInit {

  public calles : Array<any>=[];

  public page = 1;
  public pageSize = 50;
  public token:any ;
  public load_data = true;
  

  constructor(
    private _usuariosService : UsuariosService,
    private _router : Router,
    private _callesService : CallesService
  ) { 
    this.token = this._usuariosService.getToken();
  }

  ngOnInit(): void {
    this._callesService.calles_mostrar(this.token).subscribe(
      response => {
        this.calles = response.data;
        this.load_data = false;
        console.log(response)
      }, error => {
        console.log(error)
      }
    )
  }

  eliminar(id:any) {
    this._callesService.calle_eliminar(id, this.token).subscribe(
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

        this._callesService.calles_mostrar(this.token).subscribe(
          response => {
            this.calles = response.data;
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
