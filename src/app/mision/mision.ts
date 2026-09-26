import { Component, signal, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mision',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mision.html',
  styleUrl: './mision.css'
})
export class MisionComponent {
  protected nombreMision = model('');
  protected contadorMisiones = signal(0);
  protected alarmaGlobalActiva = signal(false);

  protected asignarMision(): void {
    if (this.nombreMision().trim() !== '') {
      this.contadorMisiones.update(conteoActual => conteoActual + 1);
      this.nombreMision.set('');
    }
  }

  protected alternarEstadoAlarma(): void {
    this.alarmaGlobalActiva.update(estadoActual => !estadoActual);
  }
}