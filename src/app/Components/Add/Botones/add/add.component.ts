import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  planta = {
    nombre: '',
    horarioRiego: '',
    humedadSuelo: '',
    cantidadAgua: null,
    descripcion: ''
  };

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
