import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MascotasService } from './services/mascotas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Huellitas App";
  mascotas:any[] = [];

  constructor(private mascotasService: MascotasService) {}

  ngOnInit(){
    this.mascotasService.obtenerMascotas().subscribe(data=>{
      this.mascotas = data;
    });
  }

  abrirLista(){
    console.log("Lista abierta");
  }

  abrirFormulario(){
    console.log("Formulario abierto");
  }

}