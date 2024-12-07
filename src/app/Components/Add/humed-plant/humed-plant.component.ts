import { Component } from '@angular/core';

@Component({
  selector: 'app-humed-plant',
  standalone: true,
  imports: [],
  templateUrl: './humed-plant.component.html',
  styleUrl: './humed-plant.component.css'
})
export class HumedPlantComponent {
  planta = {
    humedadSuelo: ''
  };
}
