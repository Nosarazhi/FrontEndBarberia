import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ServicioComponent } from './servicio/servicio.component';
import { TurnosComponent } from './turnos/turnos.component'; 
const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'servicios', component: ServicioComponent },
  { path: 'turnos', component: TurnosComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }