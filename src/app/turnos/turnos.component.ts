import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {
  nombre = '';
  apellido = '';
  fecha = '';
  hora = '';
  turnos: string[] = [];
  
  constructor(private http:HttpClient){}

  ngOnInit(): void {
    // Aquí puedes poner cualquier lógica de inicialización que necesites
  }

  reservarTurno() {
    if (this.fecha && this.hora) {
      const fechaFormateada = format(new Date(this.fecha), 'dd/MM/yyyy');
      const horaFormateada = format(new Date(`1970-01-01T${this.hora}:00`), 'HH:mm');

      const turno = {
        nombre: this.nombre,
        apellido: this.apellido,
        fecha: fechaFormateada,
        hora: horaFormateada
      };

      this.http.post('http://127.0.0.1:8000/', turno).subscribe(
        response => console.log(response),
        error => console.log(error)
      );
    } else {
      console.log('Por favor, introduce una fecha y hora válidas');
    }
  }
}