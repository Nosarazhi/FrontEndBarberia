import { Component } from '@angular/core';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent {
  servicios = [
    {
      nombre: 'Corte de Pelo',
      imagen: 'assets/CortePelo.jfif',
    },
    {
      nombre: 'Limpieza facial',
      imagen: 'assets/limpiezafacial.jfif',
    },
    {
      nombre: 'Teñido de Cabello',
      imagen: 'assets/limpiezafacial.jfif',
    },
    {
      nombre: 'Depilación Corporal',
      imagen: 'assets/limpiezafacial.jfif',
    },
    {
      nombre: 'Masajes',
      imagen: 'assets/limpiezafacial.jfif',
    },
  ];
}
