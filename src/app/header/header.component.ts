import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  servicios: any[] = [];

  constructor() {
    this.servicios = [
      {
        nombre: 'Corte de Pelo',
        imagen: 'assets/CorteDePelo.png',
      },
      {
        nombre: 'Limpieza facial',
        imagen: 'assets/LimpiezaFacial.jpg',
      },
      {
        nombre: 'Teñido de Cabello',
        imagen: 'assets/TeñidoCabello.jpg',
      },
      {
        nombre: 'Depilación Facial',
        imagen: 'assets/DepilacionFacial.jpg',
      },
      {
        nombre: 'Masajes',
        imagen: 'assets/MasajeFacial.jpg',
      }
    ];
  }
}