import { Component, signal } from "@angular/core";

@Component({
  selector: "app-tarjeta-perfil",
  template: `
    <div class="contenedor-tarjeta">
      <h2>{{ nombreCompleto }}</h2>
      <p>Profesion: {{ profesionUsuario }}</p>
      <p>Me gusta: {{ cantidadMeGusta() }}</p>
      <button (click)="incrementarMeGusta()">Dar me gusta</button>
    </div>
  `,
  styles: `
    .contenedor-tarjeta {
      border: 2px solid #333333;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 12px;
      background-color: #f9f9f9;
    }
    button {
      background-color: #0066cc;
      color: #ffffff;
      border: none;
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
    }
  `
})
export class TarjetaPerfil {
  protected readonly nombreCompleto = "Pepppa";
  protected readonly profesionUsuario = "Artista";
  protected readonly cantidadMeGusta = signal(0);

  protected incrementarMeGusta(): void {
    this.cantidadMeGusta.update((valorActual) => valorActual + 1);
  }
}