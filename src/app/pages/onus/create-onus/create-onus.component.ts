import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnusService } from 'src/app/services/onus.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-create-onus',
  templateUrl: './create-onus.component.html',
  styleUrls: ['./create-onus.component.css']
})
export class CreateOnusComponent implements OnInit {

  public onu : any = {}
  public token : any;

  constructor( private _usuarioService : UsuariosService,
                private _onuService : OnusService,
                private _router : Router
              ) 
              { 
                this.token = this._usuarioService.getToken()
              }

  ngOnInit(): void {
  }

  registro(registroForm:any){
    if(registroForm.valid) {
      this._onuService.crear_onu(this.onu, this.token).subscribe(
        response => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1200
          })
          this.onu = {
            identificador : '',
            gpon : '',
            admin : '',
            abonado : ''
          }
          this._router.navigate(['/dashboard/onus']);
          
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
