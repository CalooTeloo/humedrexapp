import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-plantas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-plantas.component.html',
  styleUrl: './add-plantas.component.css'
})
export class AddPlantasComponent {

  planta = {
    nombre: '',
    horarioRiego: '',
    humedadSuelo: '',
    cantidadAgua: null,
    descripcion: ''
  };

  constructor(private router: Router) { }

  onSubmit() {
    // Aquí puedes manejar la lógica para guardar la planta
    console.log('Planta agregada:', this.planta);

    // Por ejemplo, podrías enviar la planta a un servicio para guardarla en una base de datos
    // plantService.addPlant(this.planta).subscribe(() => {
    //   // Redirigir a otra página o mostrar un mensaje de éxito
    //   this.router.navigate(['/plantas']);
    // });

    // Reiniciar el formulario después de agregar la planta
    this.resetForm();
  }

  resetForm() {
    this.planta = {
      nombre: '',
      horarioRiego: '',
      humedadSuelo: '',
      cantidadAgua: null,
      descripcion: ''
    };
  }

}
