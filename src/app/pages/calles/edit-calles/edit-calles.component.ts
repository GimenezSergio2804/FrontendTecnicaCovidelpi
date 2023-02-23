import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallesService } from 'src/app/services/calles.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-calles',
  templateUrl: './edit-calles.component.html',
  styleUrls: ['./edit-calles.component.css']
})
export class EditCallesComponent implements OnInit {

  public token:any;
  public id:any;
  public calles : any = {}

  constructor(
    private _route : ActivatedRoute,
    private _usuariosService : UsuariosService,
    private _callesService : CallesService,
    private _router : Router
  ) {
    this.token = this._usuariosService.getToken();
   }

  ngOnInit(): void {
    this._route.params.subscribe(
      params => {
        this.id = params['id'];
        this._callesService.calle_obtener(this.id, this.token).subscribe(
          response => {
            if(response.data == undefined){
              this.calles = undefined
              console.log(this.calles)
            } else {
              this.calles = response.data            
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
      this._callesService.calle_actualizar(this.id, this.calles , this.token ).subscribe(
        response=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1500
          })
          this._router.navigate(['/dashboard/calles'])

        } ,error => {
          console.log(error);
        }
      )
      

  }

}
