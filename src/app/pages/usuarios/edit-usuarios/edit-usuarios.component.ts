import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-usuarios',
  templateUrl: './edit-usuarios.component.html',
  styleUrls: ['./edit-usuarios.component.css']
})
export class EditUsuariosComponent implements OnInit {

  public usuarios : any = {};
  public id:any;
  public token:any;

  constructor(
    private _route : ActivatedRoute,
    private _usuariosService : UsuariosService,
    private _router : Router
  ) { 
    this.token = this._usuariosService.getToken();
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=> {
        this.id = params['id'];

        this._usuariosService.obtener_usuario_admin(this.id, this.token).subscribe(
          response => {
            if(response.data == undefined){
              this.usuarios = undefined
              console.log(this.usuarios)
            } else {
              this.usuarios = response.data            
            }
          }, error=> {

          }
        )

      }
    )
  }

  actualizar(updateForm:any) {
    if(updateForm.valid){
      this._usuariosService.actualizar_usuario_admin(this.id, this.usuarios , this.token ).subscribe(
        response=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1200
          })
          this._router.navigate(['/dashboard/usuarios'])

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
