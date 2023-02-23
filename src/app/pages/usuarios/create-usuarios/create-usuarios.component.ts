import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-usuarios',
  templateUrl: './create-usuarios.component.html',
  styleUrls: ['./create-usuarios.component.css']
})
export class CreateUsuariosComponent implements OnInit {

  public usuarios : any = {
    sector : '',
    role : ''
  };
  public token:any;

  constructor(
    private _usuarioService : UsuariosService,
    private _router : Router
  ) {
    this.token = this._usuarioService.getToken();
   }

  ngOnInit(): void {
    
  }

  registro(registroForm:any) {
    if(registroForm.valid){
      this._usuarioService.registro_usuario_admin(this.usuarios, this.token).subscribe(
        
        response => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: response.message,
              showConfirmButton: false,
              timer: 1200
            })
            this.usuarios = {
              legajo :'',
              nombres : '',
              apellidos :'',
              sector : '',
              email : '',
              password : '',
              perfil : '',
              telefono : '',
              f_nacimiento : '',
              f_ingreso : '',
              dni : '',
              role : ''
            }
            this._router.navigate(['/dashboard/usuarios'])
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
