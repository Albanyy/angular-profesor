import { Component, signal, computed } from "@angular/core"

@Component({
  selector: "app-tarjeta-libro",
  templateUrl: "./tarjeta-libro.html",
  styleUrl: "./tarjeta-libro.css"
})
export class TarjetaLibro {
  protected readonly titulo = "cuento de george"
  protected readonly autor = "papa cerdito"
  protected readonly anio = 2026
  protected readonly votos = signal(0)
  protected readonly disponible = signal(true)

  protected readonly esPopular = computed(() => this.votos() >= 10)

  protected votar(): void {
    this.votos.update((valor) => valor + 1)
  }

  protected alternarDisponibilidad(): void {
    this.disponible.update((valor) => !valor)
  }
  
}
