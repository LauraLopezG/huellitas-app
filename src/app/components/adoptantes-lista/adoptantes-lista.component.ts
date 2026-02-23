import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdoptantesService, Adoptante } from '../../services/adoptantes.service';

@Component({
  selector: 'app-adoptantes-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adoptantes-lista.component.html',
  styleUrls: ['./adoptantes-lista.component.css']
})
export class AdoptantesListaComponent {
  adoptantes: Adoptante[] = [];
  filtro: string = '';

  constructor(private adoptantesService: AdoptantesService) {
    this.adoptantesService.getAdoptantes().subscribe(data => {
      this.adoptantes = data;
    });
  }

  get adoptantesFiltrados(): Adoptante[] {
    return this.adoptantes.filter(a =>
      a.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}