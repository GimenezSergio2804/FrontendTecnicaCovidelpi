import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user : any = [];
  public usuario : any = {};
  public token : any = '';

  constructor(
    private _userService: UsuariosService,
    private _router: Router
  ) { 
    this.token = this._userService.getToken();
  }

  ngOnInit(): void {
    if(this.token) {
      this._router.navigate(['/dashboard']);
    } else {
      // Mantener en el componente
    }
  }

  login(loginForm:any) {
    if(loginForm.valid) {

      let data = {
        email: this.user.email,
        password: this.user.password
      }

      this._userService.login_usuario(data).subscribe(
        response=>{
          if(response.data == undefined) {
            Swal.fire({
              icon: 'error',
              text: response.message
            })
          } else {
            this.usuario = response.data

            localStorage.setItem('token', response.token);
            localStorage.setItem('_id', response.data._id);

            this._router.navigate(['/dashboard']);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `Que bueno verte de nuevo ${this.usuario.nombres} ${this.usuario.apellidos}`,
              showConfirmButton: false,
              timer: 1500
            })
          }
        },
        error=>{
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
