import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallesService } from 'src/app/services/calles.service';
import { PersonasService } from 'src/app/services/personas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-create-persona',
  templateUrl: './create-persona.component.html',
  styleUrls: ['./create-persona.component.css']
})
export class CreatePersonaComponent implements OnInit {

  public persona : any = {}
  public calles : any = []
  public token : any;
  public centrales : any;

  constructor( private _usuarioService : UsuariosService,
                private _callesService : CallesService,
                private _router : Router,
                private _personaService : PersonasService 
              ) 
              { 
                this.token = this._usuarioService.getToken()
              }

  ngOnInit(): void {
    // Obtengo datos para las calles
    this._callesService.calles_mostrar(this.token).subscribe(
      response => {
        this.calles = response.data;
      }, error => {
        console.log(error)
      }
    )
  }

  registro(registroForm:any){
    if(registroForm.valid) {
      this._personaService.abonado_registro(this.persona, this.token).subscribe(
        response => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1200
          })
          this.persona = {
            numero_de_persona : '',
            nombres : '',
            apellidos : '',
            dni : '',
            central : '',
            coordenadas: '',
            calle : '',
            numero_calle: '',
            entrecalle1 : '',
            entrecalles2 : '',
            contacto : '',
            email : ''
          }
          this._router.navigate(['/dashboard/abonados']);
          
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

