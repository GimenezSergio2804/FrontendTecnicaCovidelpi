import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { AdminGuard } from '../guards/admin.guard';
import { CtoFtthComponent } from './cto-ftth/cto-ftth.component';
import { CreateUsuariosComponent } from './usuarios/create-usuarios/create-usuarios.component';
import { EditUsuariosComponent } from './usuarios/edit-usuarios/edit-usuarios.component';
import { CreateCtoFtthComponent } from './cto-ftth/create-cto-ftth/create-cto-ftth.component';
import { EditCtoFtthComponent } from './cto-ftth/edit-cto-ftth/edit-cto-ftth.component';
import { CentralesComponent } from './centrales/centrales.component';
import { CreateCentralesComponent } from './centrales/create-centrales/create-centrales.component';
import { EditCentralesComponent } from './centrales/edit-centrales/edit-centrales.component';
import { AlertasComponent } from './alertas/alertas.component';
import { CreateAlertasComponent } from './alertas/create-alertas/create-alertas.component';
import { EditAlertasComponent } from './alertas/edit-alertas/edit-alertas.component';
import { HistoricalAlertasComponent } from './alertas/historical-alertas/historical-alertas.component';
import { CallesComponent } from './calles/calles.component';
import { CreateCallesComponent } from './calles/create-calles/create-calles.component';
import { EditCallesComponent } from './calles/edit-calles/edit-calles.component';
import { ViewComponent } from './cto-ftth/view/view.component';
import { CreateOnusComponent } from './onus/create-onus/create-onus.component';
import { EditOnusComponent } from './onus/edit-onus/edit-onus.component';
import { OnusComponent } from './onus/onus.component';
import { PersonasComponent } from './personas/personas.component';
import { EditPersonaComponent } from './personas/edit-persona/edit-persona.component';
import { ViewPersonaComponent } from './personas/view-persona/view-persona.component';
import { CreatePersonaComponent } from './personas/create-persona/create-persona.component';


const routes:Routes = [
  {path:'dashboard', component: PagesComponent,

  children: [
    {path: '', component: DashboardComponent},
    {path:'configuraciones', component : ConfiguracionesComponent},

    {path:'usuarios', component : UsuariosComponent, canActivate: [AdminGuard]},
    {path:'usuarios/registro', component : CreateUsuariosComponent, canActivate: [AdminGuard]},
    {path: 'usuarios/:id', component : EditUsuariosComponent, canActivate: [AdminGuard]},

    {path:'cto-ftth', component: CtoFtthComponent},
    {path:'cto-ftth/registro', component: CreateCtoFtthComponent},
    {path:'cto-ftth/:id', component: EditCtoFtthComponent},
    {path:'cto-ftth/view/:id', component: ViewComponent},

    {path: 'centrales', component: CentralesComponent},
    {path: 'centrales/registro', component: CreateCentralesComponent},
    {path: 'centrales/:id', component: EditCentralesComponent },

    {path: 'alertas/historico', component: HistoricalAlertasComponent },
    {path: 'alertas/registro', component: CreateAlertasComponent},
    {path: 'alertas/:id', component: EditAlertasComponent },
    {path: 'alertas/finalizar/:id', component: AlertasComponent },
    
    {path: 'calles', component: CallesComponent},
    {path: 'calles/registro', component: CreateCallesComponent},
    {path: 'calles/:id', component: EditCallesComponent },

    {path:'onus', component: OnusComponent},
    {path:'onus/registro', component: CreateOnusComponent},
    {path:'onus/:id', component: EditOnusComponent},

    {path:'abonados', component: PersonasComponent},
    {path:'abonados/registro', component: CreatePersonaComponent},
    {path:'abonados/:id', component: EditPersonaComponent},
    {path:'abonados/view/:id', component: ViewPersonaComponent},
  ]
},

]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
