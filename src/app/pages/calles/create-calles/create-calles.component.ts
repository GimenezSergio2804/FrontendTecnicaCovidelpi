import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallesService } from 'src/app/services/calles.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-calles',
  templateUrl: './create-calles.component.html',
  styleUrls: ['./create-calles.component.css']
})
export class CreateCallesComponent implements OnInit {

  public calles : any = {}
  public token:any;

  constructor(
    private _callesService : CallesService,
    private _usuariosService : UsuariosService,
    private _router : Router 
  ) { 
    this.token = this._usuariosService.getToken();
  }

  ngOnInit(): void {
  }

  registro(registroForm:any){
    this._callesService.calle_registro(this.calles, this.token).subscribe(
      response => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: response.message,
          showConfirmButton: false,
          timer: 1500
        })
        this.calles = {
          nombre : '',
        }
        this._router.navigate(['/dashboard/calles'])
      }, error =>{
        console.log(error)
      }
    )
  }

}
