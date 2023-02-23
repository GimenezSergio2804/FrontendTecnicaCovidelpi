import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[{
    titulo: 'Dashboard',
    icono: 'nav-icon fas fa-tachometer-alt',
    submenu:[
      {titulo: 'Usuarios', url:'usuarios', icono:'fa fa-users'},
      {titulo: 'Centrales', url:'centrales', icono:'fas fa-house-damage'},
      {titulo: 'Calles', url:'calles', icono:'fas fa-directions'},
      {titulo: 'Configuraciones', url:'configuraciones', icono:'fas fa-cog'}
    ]
  },
  {
    titulo: 'Abonados',
    icono: 'fas fa-users',
    submenu:[
      {titulo: 'Personas', url:'abonados', icono:'	fas fa-user-tag'},
    ]
  },
  {
    titulo: 'FTTH',
    icono: 'fas fa-laptop-house',
    submenu:[
      {titulo: 'Ctos', url:'cto-ftth', icono:'fas	fa-archive'},
      {titulo: 'Onus', url:'onus', icono: 'fab fa-intercom'}
    ]
  },
]

}
