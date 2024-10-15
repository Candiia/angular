import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  result = '';

  addNumero(num: number) {
    this.result += num.toString();
  }

  addSigno(signo: String) {
    this.result += signo
  }

  limpiar() {
    this.result = '';
  }

  operaciones() {
    this.result = eval(this.result);
  }
}
