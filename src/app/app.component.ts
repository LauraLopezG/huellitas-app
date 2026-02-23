import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // ✅ importa RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // ✅ añade aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Huellitas-App';

  abrirLista() {
    window.open('/adoptantes/lista', '_blank');
  }

  abrirFormulario() {
    window.open('/adoptantes/formulario', '_blank');
  }
}