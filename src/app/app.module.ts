import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicioComponent } from './servicio/servicio.component';
import { TurnosComponent } from './turnos/turnos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicioComponent,
    TurnosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
