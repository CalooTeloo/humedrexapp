import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NamePlantComponent } from '../../../Add/name-plant/name-plant.component';
import { HoraPlantComponent } from '../hora-plant/hora-plant.component';
import { HumedPlantComponent } from '../humed-plant/humed-plant.component';
import { CantAguaComponent } from '../../Cant/cant-agua/cant-agua.component';
import { DescripComponent } from '../descrip/descrip.component';
import { AddComponent } from '../Botones/add/add.component';

@Component({
  selector: 'app-add-plantas',
  standalone: true,
  imports: [CommonModule, FormsModule, NamePlantComponent,HoraPlantComponent,HumedPlantComponent,CantAguaComponent,DescripComponent,AddComponent],
  templateUrl: './add-plantas.component.html',
  styleUrl: './add-plantas.component.css'
})
export class AddPlantasComponent {

  selectedImage: File | null = null;
  imageUrl: string | null = null;

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedImage = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(this.selectedImage);
    }
  }

  constructor(private router: Router) { }

}
