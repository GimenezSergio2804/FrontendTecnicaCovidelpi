import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuarios : Array<any>=[];
  public filtro_apellidos = '';
  public filtro_correo = '';

  public page = 1;
  public pageSize = 5;
  public token:any ;
  public load_data = true;

  constructor(
    private _usuariosService : UsuariosService,
    private _router : Router
  ) {
    this.token = this._usuariosService.getToken();
   }

  ngOnInit(): void {
    this.init_Data();
  }

  init_Data() {
    this._usuariosService.listar_usuarios_filtro_admin(null, null, this.token).subscribe(
      response => {
        this.usuarios = response.data;

        this.load_data = false;
      },
      error=> {
        console.log(error)
      }
    )
  }

  filtro(tipo:any) {

    if(tipo == 'apellidos') {
      if(this.filtro_apellidos) {
        this._usuariosService.listar_usuarios_filtro_admin(tipo, this.filtro_apellidos, this.token).subscribe(
          response => {
            this.usuarios = response.data;
          },
          error=> {
            console.log(error)
          }
        )
      } else {
        this.init_Data();
      }
    } else if(tipo == 'correo'){
      if(this.filtro_correo) {
        this._usuariosService.listar_usuarios_filtro_admin(tipo, this.filtro_correo, this.token).subscribe(
          response => {
            this.usuarios = response.data;
          },
          error=> {
            console.log(error)
          }
        )
      } else {
        this.init_Data();
      }
    }

   

  }

  eliminar(id:any) {
    this._usuariosService.eliminar_usuario_admin(id, this.token).subscribe(
      response => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: response.message,
          showConfirmButton: false,
          timer: 1500
        })

        $('#delete-'+id).modal('hide');
        $('.modal-backdrop').removeClass('show');

        this.init_Data();
      }, error => {

      }
    )
  }

}
