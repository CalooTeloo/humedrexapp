import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-plant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './name-plant.component.html',
  styleUrl: './name-plant.component.css'
})
export class NamePlantComponent {
  planta = {
    nombre: ''
  };
}
