import { Component } from '@angular/core';
import { AlumnoDto } from '../../models/alumno.dto';

@Component({
  selector: 'app-alumno-add-form',
  templateUrl: './alumno-add-form.component.html',
  styleUrl: './alumno-add-form.component.css'
})
export class AlumnoAddFormComponent {

  pageList = ['Buscando por google', 'Por un familiar', 'Por un amigo'];
  student = new AlumnoDto('', '', '', 0, '', '', '', '', '');
  submitted = false;

  constructor() {}

  addStudent() {
    console.log(this.student);
    this.submitted = true;
  }
}
