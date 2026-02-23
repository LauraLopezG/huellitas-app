import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [RouterOutlet],   // 👈 Importa RouterOutlet aquí
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent { }