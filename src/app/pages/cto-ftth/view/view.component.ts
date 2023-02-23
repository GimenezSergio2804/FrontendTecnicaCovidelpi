import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CtoFtthService } from 'src/app/services/cto-ftth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public cto : any = {};
  public id : any;
  public token:any;
  public calles : Array<any> = [];
  public centrales : Array<any> = []

  constructor(
    private _usuarioService : UsuariosService,
    private _ctoService : CtoFtthService,
    private _route : ActivatedRoute
  ) { 
    this.token = this._usuarioService.getToken();
  }

  ngOnInit(): void {

   this._route.params.subscribe(
     params=> {
       this.id = params['id'];

       this._ctoService.cto_obtener(this.id, this.token).subscribe(
         response => {
           if(response.data == undefined){
             this.cto = undefined
             console.log(this.cto)
           } else {
             this.cto = response.data            
           }
         }, error=> {

         }
       )

     }
   )
 }

}
