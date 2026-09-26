import { Component } from "@angular/core"

@Component({
  selector: "app-encabezado-app",
  template: `
    <header class="encabezado">
      <h1>biblioteca </h1>
      <p>usuario </p>
    </header>
  `,
  styles: `
    .encabezado {
      background-color: #f0f0f0;
      padding: 1rem;
      margin-bottom: 1rem;
    }
  `
})
export class EncabezadoApp {}