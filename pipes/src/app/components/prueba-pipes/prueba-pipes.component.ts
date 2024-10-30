import { Component, OnInit } from '@angular/core';
import { CustomEurPipe } from '../../piper/custom-eur.pipe';

@Component({
  selector: 'app-prueba-pipes',
  templateUrl: './prueba-pipes.component.html',
  styleUrl: './prueba-pipes.component.css'
})
export class PruebaPipesComponent implements OnInit {
  

  texto = 'Bienvenido a la pagina de inicio';
  precio = 32.1965;
  date= '2024-03-26'
  porcentaje = 0.15;
  customValue: string | number = 15;

  constructor(private custom: CustomEurPipe){};

  ngOnInit(): void {
    this.customValue = this.custom.transform(this.customValue);
  }

}
