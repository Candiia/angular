import { Component } from '@angular/core';
import { AlumnoDto } from '../../models/alumno.dto';

@Component({
  selector: 'app-alumno-add-form',
  templateUrl: './alumno-add-form.component.html',
  styleUrl: './alumno-add-form.component.css'
})
export class AlumnoAddFormComponent {

  pageList = ['Buscando por google', 'Por un familiar', 'Por un amigo'];
  student = new AlumnoDto('', '', '', 0, '', '', '', '', '', '');
  submitted = false;
  emailErrorMessage: string = '';
  passwordErrorMessage: string = '';
  dniLetter: string = '';

  constructor() { }

  private validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  private validatePasswords(): boolean {
    return this.student.password === this.student.password2;
  }

  calcularLetraDNI() {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const dniNumber = parseInt(this.student.nif, 10);

    if (!isNaN(dniNumber) && this.student.nif.length === 8) {
      const letraIndex = dniNumber % 23;
      this.dniLetter = letras.charAt(letraIndex);
    } else {
      this.dniLetter = '';
    }
  }


  addStudent() {
    if (!this.validateEmail(this.student.email)) {
      this.emailErrorMessage = 'email incorrecto';
      return;
    } else {
      this.emailErrorMessage = '';
    }

    if (!this.validatePasswords()) {
      this.passwordErrorMessage = 'Las contraseñas no coinciden.';
      return;
    } else {
      this.passwordErrorMessage = '';
    }

    console.log(this.student);
    this.submitted = true;
  }
}
