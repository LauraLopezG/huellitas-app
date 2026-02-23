import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  loginForm: FormGroup;
  isLoggedIn = false;
  usuario = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      usuario: [''],
      password: ['']
    });
  }

  iniciarSesion(): void {
    const { usuario, password } = this.loginForm.value;

    // 🔹 Aquí podrías validar contra una API real
    if (usuario === 'admin' && password === '1234') {
      this.isLoggedIn = true;
      this.usuario = usuario;
    } else {
      alert('Credenciales incorrectas');
    }
  }

  cerrarSesion(): void {
    this.isLoggedIn = false;
    this.loginForm.reset();
  }
}