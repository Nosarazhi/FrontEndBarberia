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
      imagen: 'url-de-la-imagen',
      descripcion: 'Descripción del servicio'
    },
    {
      nombre: 'Limpieza facial',
      imagen: 'assets/limpiezafacial.jfif',
      descripcion: 'Nuestra limpieza facial es más que un simple tratamiento de belleza. Es una experiencia de bienestar integral que no solo mejora la apariencia de tu piel, sino que también te proporciona un momento de relajación y cuidado personal. Utilizamos productos de alta calidad que son suaves con tu piel y la dejan con una sensación de frescura y renovación. Este servicio es perfecto para prepararte para un evento especial o simplemente para darte un capricho. Ven y descubre la diferencia que puede hacer una limpieza facial profesional en tu rutina de belleza.'
    },
    {
      nombre: 'Teñido de Cabello',
      imagen: 'url-de-la-imagen',
      descripcion: 'Descripción del servicio'
    },
    {
      nombre: 'Depilación Corporal',
      imagen: 'url-de-la-imagen',
      descripcion: 'Descripción del servicio'
    },
    {
      nombre: 'Masajes',
      imagen: 'url-de-la-imagen',
      descripcion: 'Descripción del servicio'
    },
  ];
}
