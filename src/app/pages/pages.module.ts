import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CtoFtthComponent } from './cto-ftth/cto-ftth.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateUsuariosComponent } from './usuarios/create-usuarios/create-usuarios.component';
import { EditUsuariosComponent } from './usuarios/edit-usuarios/edit-usuarios.component';
import { CreateCtoFtthComponent } from './cto-ftth/create-cto-ftth/create-cto-ftth.component';
import { EditCtoFtthComponent } from './cto-ftth/edit-cto-ftth/edit-cto-ftth.component';
import { CentralesComponent } from './centrales/centrales.component';
import { EditCentralesComponent } from './centrales/edit-centrales/edit-centrales.component';
import { CreateCentralesComponent } from './centrales/create-centrales/create-centrales.component';
import { AlertasComponent } from './alertas/alertas.component';
import { CreateAlertasComponent } from './alertas/create-alertas/create-alertas.component';
import { EditAlertasComponent } from './alertas/edit-alertas/edit-alertas.component';
import { HistoricalAlertasComponent } from './alertas/historical-alertas/historical-alertas.component';
import { EditCallesComponent } from './calles/edit-calles/edit-calles.component';
import { CreateCallesComponent } from './calles/create-calles/create-calles.component';
import { CallesComponent } from './calles/calles.component';
import { ViewComponent } from './cto-ftth/view/view.component';
import { OnusComponent } from './onus/onus.component';
import { EditOnusComponent } from './onus/edit-onus/edit-onus.component';
import { CreateOnusComponent } from './onus/create-onus/create-onus.component';
import { PersonasComponent } from './personas/personas.component';
import { CreatePersonaComponent } from './personas/create-persona/create-persona.component';
import { EditPersonaComponent } from './personas/edit-persona/edit-persona.component';
import { ViewPersonaComponent } from './personas/view-persona/view-persona.component';




@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    PagesComponent,
    ConfiguracionesComponent,
    CtoFtthComponent,
    CreateUsuariosComponent,
    EditUsuariosComponent,
    CreateCtoFtthComponent,
    EditCtoFtthComponent,
    CentralesComponent,
    EditCentralesComponent,
    CreateCentralesComponent,
    AlertasComponent,
    CreateAlertasComponent,
    EditAlertasComponent,
    HistoricalAlertasComponent,
    EditCallesComponent,
    CreateCallesComponent,
    CallesComponent,
    ViewComponent,
    OnusComponent,
    EditOnusComponent,
    CreateOnusComponent,
    PersonasComponent,
    CreatePersonaComponent,
    EditPersonaComponent,
    ViewPersonaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ],
  exports: [
    DashboardComponent,
    UsuariosComponent,
    PagesComponent
  ]
})
export class PagesModule { }
