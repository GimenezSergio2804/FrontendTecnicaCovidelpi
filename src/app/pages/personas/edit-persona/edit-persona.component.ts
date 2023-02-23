import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallesService } from 'src/app/services/calles.service';
import { PersonasService } from 'src/app/services/personas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {

  public persona : any = {};
  public id:any;
  public token:any;
  public calles:any;

  constructor(
    private _route : ActivatedRoute,
    private _usuariosService : UsuariosService,
    private _router : Router,
    private _callesService : CallesService,
    private _personaService : PersonasService
  ) { 
    this.token = this._usuariosService.getToken();
  }

  ngOnInit(): void {
    // obtener calles 
    this._callesService.calles_mostrar(this.token).subscribe(
      response => {
        this.calles = response.data;
      }, error => {
        console.log(error)
      }
    )
    this._route.params.subscribe(
      params=> {
        this.id = params['id'];

        this._personaService.abonado_obtener(this.id, this.token).subscribe(
          response => {
            if(response.data == undefined){
              this.persona = undefined
              console.log(this.persona)
            } else {
              this.persona = response.data            
            }
          }, error=> {

          }
        )

      }
    )
  }

  actualizar(updateForm:any) {
    if(updateForm.valid){
      this._personaService.abonado_actualizar(this.id, this.persona , this.token ).subscribe(
        response=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1200
          })
          this._router.navigate(['/dashboard/abonados'])

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