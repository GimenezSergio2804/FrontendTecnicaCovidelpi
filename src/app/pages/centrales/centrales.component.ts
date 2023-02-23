import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentralesService } from 'src/app/services/centrales.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-centrales',
  templateUrl: './centrales.component.html',
  styleUrls: ['./centrales.component.css']
})
export class CentralesComponent implements OnInit {

  public centrales : Array<any>=[];

  public page = 1;
  public pageSize = 5;
  public token:any ;
  public load_data = true;
  

  constructor(
    private _centralesService : CentralesService,
    private _usuariosService : UsuariosService,
    private _router : Router
  ) { 
    this.token = this._usuariosService.getToken();
  }

  ngOnInit(): void {
    this._centralesService.mostrar_centrales_admin(this.token).subscribe(
      response => {
        this.centrales = response.data;
        this.load_data = false;
        console.log(response)
      }, error => {
        console.log(error)
      }
    )
  }

  eliminar(id:any) {
    this._centralesService.eliminar_central_admin(id, this.token).subscribe(
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

        this._centralesService.mostrar_centrales_admin(this.token).subscribe(
          response => {
            this.centrales = response.data;
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
