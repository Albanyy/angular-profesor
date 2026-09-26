import { Component, signal } from "@angular/core"
import { TarjetaLibro } from "../tarjeta-libro/tarjeta-libro"

@Component({
  selector: "app-galeria-libros",
  imports: [TarjetaLibro],
  template: `
    <h2>catalogo</h2>
    <div class="rejilla">
      <app-tarjeta-libro />
      <app-tarjeta-libro />
      <app-tarjeta-libro />
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
    .rejilla {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
  `
})
export class GaleriaLibros {
  protected readonly cantidad = signal(3)
}
