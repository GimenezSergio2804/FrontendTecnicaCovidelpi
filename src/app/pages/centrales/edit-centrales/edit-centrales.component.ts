import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CentralesService } from 'src/app/services/centrales.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-centrales',
  templateUrl: './edit-centrales.component.html',
  styleUrls: ['./edit-centrales.component.css']
})
export class EditCentralesComponent implements OnInit {

  public token:any;
  public id:any;
  public centrales : any = {}

  constructor(
    private _route : ActivatedRoute,
    private _usuariosService : UsuariosService,
    private _centralesService : CentralesService,
    private _router : Router
  ) {
    this.token = this._usuariosService.getToken();
   }

  ngOnInit(): void {
    this._route.params.subscribe(
      params => {
        this.id = params['id'];
        this._centralesService.obtener_central_admin(this.id, this.token).subscribe(
          response => {
            if(response.data == undefined){
              this.centrales = undefined
              console.log(this.centrales)
            } else {
              this.centrales = response.data            
            }
          } , error => {
            console.log(error);
          }
        )
      }, error =>{

      }
    )
  }

  actualizar(updateForm:any) {
      this._centralesService.actualizar_central_admin(this.id, this.centrales , this.token ).subscribe(
        response=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1500
          })
          this._router.navigate(['/dashboard/centrales'])

        } ,error => {
          console.log(error);
        }
      )
      

  }

}
