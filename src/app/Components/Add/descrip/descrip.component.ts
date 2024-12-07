import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-descrip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './descrip.component.html',
  styleUrl: './descrip.component.css'
})
export class DescripComponent {
  planta = {
    descripcion: ''
  };
}
