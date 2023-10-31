import { Component } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent {
  nombre = '';
  apellido = '';
  fecha = '';
  hora = '';
  turnos: string[] = [];
  
  reservarTurno() {
    if (this.fecha && this.hora) {
      const fechaFormateada = format(new Date(this.fecha), 'dd/MM/yyyy');
      const horaFormateada = format(new Date(`1970-01-01T${this.hora}:00`), 'HH:mm');
      console.log(`Turno reservado para ${this.nombre} ${this.apellido} el ${fechaFormateada} a las ${horaFormateada}`);
      this.turnos.push(`Turno reservado para ${this.nombre} ${this.apellido} el ${fechaFormateada} a las ${horaFormateada}`);
    } else {
      console.log('Por favor, introduce una fecha y hora válidas');
    }
  }
}