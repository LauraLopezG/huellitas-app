import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adoptantes-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './adoptantes-formulario.component.html',
  styleUrls: ['./adoptantes-formulario.component.css']
})
export class AdoptantesFormularioComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: [''],
      telefono: ['']
    });
  }

  agregarAdoptante(): void {
    console.log('Nuevo adoptante:', this.form.value);
    this.form.reset();
  }
}