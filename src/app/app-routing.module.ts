import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ServicioComponent } from './servicio/servicio.component';


const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'servicios', component: ServicioComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
