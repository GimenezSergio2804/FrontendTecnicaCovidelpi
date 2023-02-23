import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-alertas',
  templateUrl: './create-alertas.component.html',
  styleUrls: ['./create-alertas.component.css'],
})
export class CreateAlertasComponent implements OnInit {
  public token: any;
  public alerta: any = {
    tipo: '',
  };

  constructor(
    private _usuariosService: UsuariosService,
    private _alertasService: AlertasService,
    private _router : Router
  ) {
    this.token = this._usuariosService.getToken();
  }

  ngOnInit(): void {}

  registro(registroForm: any) {
    if(registroForm.valid) {
      this._alertasService.crear_alerta(this.alerta, this.token).subscribe(
        response => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1300
          })
          this.alerta = {
            tipo :'',
            titulo : '',
            descripcion :'',
          }
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
