import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallesService } from 'src/app/services/calles.service';
import { CentralesService } from 'src/app/services/centrales.service';
import { CtoFtthService } from 'src/app/services/cto-ftth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-cto-ftth',
  templateUrl: './edit-cto-ftth.component.html',
  styleUrls: ['./edit-cto-ftth.component.css']
})
export class EditCtoFtthComponent implements OnInit {

  public cto : any = {};
  public calles : Array<any>= []; 
  public centrales : Array<any>= []; 
  public id:any;
  public token:any;

  constructor(private _usuariosService : UsuariosService,
              private _ctoService : CtoFtthService,
              private _route : ActivatedRoute,
              private _router : Router,
              private _callesService : CallesService,
              private _centralesService : CentralesService
              ) { 
    this.token = this._usuariosService.getToken();
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
    this._route.params.subscribe(
      params=> {
        this.id = params['id'];

        this._ctoService.cto_obtener(this.id, this.token).subscribe(
          response => {
            if(response.data == undefined){
              this.cto = undefined
              console.log(this.cto)
            } else {
              this.cto = response.data            
            }
          }, error=> {

          }
        )

      }
    )
  }

  actualizar(updateForm:any) {
    if(updateForm.valid){
      this._ctoService.cto_actualizar(this.id, this.cto , this.token ).subscribe(
        response=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1200
          })
          this._router.navigate(['/dashboard/cto-ftth'])

        } ,error => {

        }
      )
      
    } else {
      Swal.fire({
        icon: 'error',
        text:'Todos los campos son obligatorios'
      })
    }
  }
}
