import { Component, signal, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  protected usuarioActivo = signal('Estudiante');
  protected nivel = signal(1);
  protected modoOscuro = signal(false);
  protected correo = model('');

  protected alternarTema(): void {
    this.modoOscuro.update(val => !val);
  }
}