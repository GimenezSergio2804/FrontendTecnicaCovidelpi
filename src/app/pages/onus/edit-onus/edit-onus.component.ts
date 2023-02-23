import { Component, OnInit } from '@angular/core';
import { OnusService } from 'src/app/services/onus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CallesService } from 'src/app/services/calles.service';
import { CentralesService } from 'src/app/services/centrales.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-onus',
  templateUrl: './edit-onus.component.html',
  styleUrls: ['./edit-onus.component.css']
})
export class EditOnusComponent implements OnInit {

  public onu : any = {};
  public id:any;
  public token:any;

  constructor(private _usuariosService : UsuariosService,
              private _onuService : OnusService,
              private _route : ActivatedRoute,
              private _router : Router,
              ) { 
    this.token = this._usuariosService.getToken();
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=> {
        this.id = params['id'];

        this._onuService.onu_obtener(this.id, this.token).subscribe(
          response => {
            if(response.data == undefined){
              this.onu = undefined
              console.log(this.onu)
            } else {
              this.onu = response.data            
            }
          }, error=> {

          }
        )

      }
    )
  }

  actualizar(updateForm:any) {
    if(updateForm.valid){
      this._onuService.onu_actualizar(this.id, this.onu , this.token ).subscribe(
        response=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1200
          })
          this._router.navigate(['/dashboard/onus'])

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
