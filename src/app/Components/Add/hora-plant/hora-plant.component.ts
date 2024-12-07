import { Component } from '@angular/core';

@Component({
  selector: 'app-hora-plant',
  standalone: true,
  imports: [],
  templateUrl: './hora-plant.component.html',
  styleUrl: './hora-plant.component.css'
})
export class HoraPlantComponent {
  planta = {
    horarioRiego: '',
  };
}
