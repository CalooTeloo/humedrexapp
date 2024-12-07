import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cant-agua',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cant-agua.component.html',
  styleUrl: './cant-agua.component.css'
})
export class CantAguaComponent {
  planta = {
    cantidadAgua: null
  };
}
