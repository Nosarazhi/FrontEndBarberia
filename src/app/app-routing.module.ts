import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiceListComponent } from './lista-servicios/lista-servicios.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'servicios', component: ServicioComponent },
  { path: 'servicios', component: ServiceListComponent }, // Ruta para los servicios
  { path: 'contact', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
