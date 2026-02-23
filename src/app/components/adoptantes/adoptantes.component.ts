import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { AdoptantesService, Adoptante } from '../../services/adoptantes.service';

@Component({
  selector: 'app-adoptantes',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './adoptantes.component.html',
  styleUrls: ['./adoptantes.component.css']
})
export class AdoptantesComponent implements OnInit {
  adoptantes: Adoptante[] = [];
  filtro: string = '';
  form: FormGroup;

  // ✅ pestaña inicial: formulario
  tab: string = 'formulario';

  constructor(private adoptantesService: AdoptantesService, private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: [''],
      telefono: ['']
    });
  }

  ngOnInit(): void {
    this.adoptantesService.getAdoptantes().subscribe(data => {
      this.adoptantes = data;
    });
  }

  get adoptantesFiltrados(): Adoptante[] {
    return this.adoptantes.filter(a =>
      a.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  agregarAdoptante(): void {
    const nuevo: Adoptante = this.form.value;
    this.adoptantes.push(nuevo);
    this.form.reset();
  }
}