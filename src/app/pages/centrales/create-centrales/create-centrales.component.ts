import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentralesService } from 'src/app/services/centrales.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-centrales',
  templateUrl: './create-centrales.component.html',
  styleUrls: ['./create-centrales.component.css']
})
export class CreateCentralesComponent implements OnInit {

  public centrales : any = {}
  public token:any;

  constructor(
    private _centralService : CentralesService,
    private _usuariosService : UsuariosService,
    private _router : Router 
  ) { 
    this.token = this._usuariosService.getToken();
  }

  ngOnInit(): void {
  }

  registro(registroForm:any){
    this._centralService.registro_central_admin(this.centrales, this.token).subscribe(
      response => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: response.message,
          showConfirmButton: false,
          timer: 1500
        })
        this.centrales = {
          identificador : '',
          telefono : ''
        }
        this._router.navigate(['/dashboard/centrales'])
      }, error =>{
        console.log(error)
      }
    )
  }

}
