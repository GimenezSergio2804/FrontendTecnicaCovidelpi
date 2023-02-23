import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-alertas',
  templateUrl: './edit-alertas.component.html',
  styleUrls: ['./edit-alertas.component.css']
})
export class EditAlertasComponent implements OnInit {

  public token:any;
  public alerta : any = {};
  public id : any;

  constructor(private _usuariosService : UsuariosService,
              private _alertasService : AlertasService,
              private _route : ActivatedRoute,
              private _router : Router

    ) { 
      this. token = this._usuariosService.getToken()
    }

  ngOnInit(): void {
    this._route.params.subscribe(
      params => {
        this.id = params['id'];

        this._alertasService.obtener_alerta_id(this.id, this.token).subscribe(
          response => {
            if(response.data == undefined){
              this.alerta = undefined
              console.log(this.alerta)
            } else {
              this.alerta = response.data            
            }
          }, error => {
            console.log(error)
          }
        )

      }, error => {
        console.log(error);
      }
    )
  }

  actualizar(updateForm:any) {
    if(updateForm.valid){
      this._alertasService.actualizar_alerta(this.id, this.alerta , this.token ).subscribe(
        response=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1500
          })
          this._router.navigate(['/dashboard'])

        } ,error => {
          console.log(error);
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
