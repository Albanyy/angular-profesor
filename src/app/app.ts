import { Component, signal } from "@angular/core";

import { DashboardComponent } from './dashboard/dashboard';
import { MisionComponent } from './mision/mision';


import { EncabezadoApp } from "./encabezado-app/encabezado-app";
import { GaleriaLibros } from "./galeria-libros/galeria-libros";
import { PiePagina } from "./pie-pagina/pie-pagina";


import { TarjetaPerfil } from "./tarjeta-perfil/tarjeta-perfil";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    DashboardComponent,
    MisionComponent,
    EncabezadoApp,
    GaleriaLibros,
    PiePagina,
    TarjetaPerfil
  ],
  template: `
    <div style="padding: 20px; font-family: sans-serif;">
      <!-- SECCIÓN PDF 3 -->
      <section style="margin-bottom: 30px;">
        <app-dashboard />
      </section>

      <section style="margin-bottom: 30px;">
        <h2>Dashboard Espacio</h2>
        <app-mision />
      </section>

      <hr />

      <section style="margin-bottom: 30px;">
        <h2>Biblioteca</h2>
        <app-encabezado-app />
        <app-galeria-libros />
        <app-pie-pagina />
      </section>

      <hr />

      <section style="margin-bottom: 30px;">
        <h1>Tarjeta de Perfil</h1>
        <app-tarjeta-perfil />
        <app-tarjeta-perfil />
        <app-tarjeta-perfil />
      </section>

      <hr />

      <section style="margin-bottom: 30px;">
        <h1>{{ titulo }}</h1>
        <p>Has pulsado {{ numeroDeClics() }} veces.</p>
        <button (click)="sumarClic()">Pulsame</button>
      </section>
    </div>
  `,
  styles: `
    h1 {
      font-family: sans-serif;
      color: #222222;
    }
    button {
      padding: 0.6rem 1.2rem;
      cursor: pointer;
    }
  `
})
export class App {

  protected readonly titulo = "Angular";
  protected readonly numeroDeClics = signal(0);

  protected sumarClic(): void {
    this.numeroDeClics.update((numeroActual) => numeroActual + 1);
  }
}