import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallesService } from 'src/app/services/calles.service';
import { CentralesService } from 'src/app/services/centrales.service';
import { CtoFtthService } from 'src/app/services/cto-ftth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-create-cto-ftth',
  templateUrl: './create-cto-ftth.component.html',
  styleUrls: ['./create-cto-ftth.component.css']
})
export class CreateCtoFtthComponent implements OnInit {

  public cto : any = {}
  public calles : any = []
  public token : any;
  public centrales : any;

  constructor( private _usuarioService : UsuariosService,
                private _callesService : CallesService,
                private _centralesService : CentralesService,
                private _ctoService : CtoFtthService,
                private _router : Router
              ) 
              { 
                this.token = this._usuarioService.getToken()
              }

  ngOnInit(): void {
    // Obtengo datos para las calles
    this._callesService.calles_mostrar(this.token).subscribe(
      response => {
        this.calles = response.data;
      }, error => {
        console.log(error)
      }
    )
    // Obtengo datos para las centrales
    this._centralesService.mostrar_centrales_admin(this.token).subscribe(
      response => {
        this.centrales = response.data;
      }, error => {
        console.log(error)
      }
    )
  }

  registro(registroForm:any){
    if(registroForm.valid) {
      this._ctoService.crear_cto(this.cto, this.token).subscribe(
        response => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1200
          })
          this.cto = {
            caja : '',
            pon : '',
            pelo : '',
            central : '',
            coordenadas: '',
            calle : '',
            entrecalle1 : '',
            entrecalles2 : ''
          }
          this._router.navigate(['/dashboard/cto-ftth']);
          
        }
      )
    } else {
      console.log(registroForm)
      Swal.fire({
        icon: 'error',
        text:'Todos los campos son obligatorios'
      })
    }
  }

 
}
