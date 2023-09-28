import { Component } from '@angular/core';

@Component({
  selector: 'app-service-list',
  templateUrl: './lista-servicios.component.html',
  styleUrls: ['./lista-servicios.component.css']
})
export class ServiceListComponent {
  servicios = [
    'Corte de Pelo',
    'Limpieza Facial',
    'Teñido de Cabello',
    'Depilación Corporal',
    'Masajes'
  ];
}
