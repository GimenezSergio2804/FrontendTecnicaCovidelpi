import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonasService } from 'src/app/services/personas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  public abonados : Array<any>=[];
  public load_data = true;

  public page = 1;
  public pageSize = 50;
  public token:any ;

  constructor(
    private _usuariosService : UsuariosService,
    private _router : Router,
    private _personasService : PersonasService
  ) { 
    this.token = this._usuariosService.getToken();
  }

  ngOnInit(): void {
    this._personasService.abonado_mostrar(this.token).subscribe(
      response => {
        this.abonados = response.data;
        this.load_data = false;
      }, error => {
        console.log(error)
      }
    )
  }

  eliminar(id:any) {
    // this._personasService.cto_eliminar(id, this.token).subscribe(
    //   response=>{
    //     Swal.fire({
    //       position: 'top-end',
    //       icon: 'success',
    //       title: response.message,
    //       showConfirmButton: false,
    //       timer: 1500
    //     })
    //     $('#delete-'+id).modal('hide');
    //     $('.modal-backdrop').removeClass('show');

    //     this._ctoService.cto_mostrar(this.token).subscribe(
    //       response => {
    //         this.ctos = response.data;
    //         this.load_data = false;
    //         console.log(response)
    //       }, error => {
    //         console.log(error)
    //       }
    //     )


    //   } ,error => {

    //   }
    // )
  }

}
