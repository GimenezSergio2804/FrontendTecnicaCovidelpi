import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css'],
})
export class AlertasComponent implements OnInit {

  public alerta :any = {}
  public id:any;
  public token: any;


  constructor( private _alertasService : AlertasService,
              private _usuarioService : UsuariosService,
              private _route : ActivatedRoute,
              private _router : Router
  ) {
    this.token = this._usuarioService.getToken()
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

  finalizar(finishForm:any){
    if(finishForm.valid){
      this._alertasService.finalizar_alerta(this.id, this.alerta ,this.token).subscribe(
        response => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 900
          })
          this._router.navigate(['/dashboard'])
        }, error => {
          console.log(error)
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
