import { Component } from '@angular/core';


export interface ListadoAlumnos {
  numberAlumn: number;
  name: string;
  surname: string;
  nif: string;
  age: number;
  course: string;
}

const ALUMNO_DATA: ListadoAlumnos[] = [
  { numberAlumn: 1, name: 'Luís', surname: 'Martínez', nif: '47255631J', age: 25, course: '2ºDAM' },
  { numberAlumn: 2, name: 'Ana', surname: 'Ortíz', nif: '475263481K', age: 23, course: '1ºDAM' },
  { numberAlumn: 3, name: 'Cloe', surname: 'Gúzman', nif: '52256331S', age: 22, course: '2ºAYF' },
  { numberAlumn: 4, name: 'Francisco', surname: 'Alcantarilla', nif: '28555631J', age: 20, course: '1ºTeleco' },
  { numberAlumn: 5, name: 'José', surname: 'Fernandez', nif: '48263620L', age: 25, course: '2ºDAM' },
  { numberAlumn: 6, name: 'Lucía', surname: 'Pérez', nif: '46256302G', age: 23, course: '2ºTeleco' },
  { numberAlumn: 7, name: 'Olga', surname: 'Marcos', nif: '47259658B', age: 21, course: '2ºDAM' },
  { numberAlumn: 8, name: 'David', surname: 'Guitierrez', nif: '47296638Y', age: 26, course: '1ºYFM' },
  { numberAlumn: 9, name: 'Lucas', surname: 'Calado', nif: '28255403M', age: 29, course: '2ºDAM' },
  { numberAlumn: 10, name: 'Patricia', surname: 'López', nif: '36525632P', age: 27, course: '2ºAYF' },
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})

export class TableComponent {
  listadoAlumnos = ALUMNO_DATA;
  displayedColumns: string[] = [];


  seleccionar(marcado: boolean, nombreTabla: string) {
    if (marcado) {
      this.addColumn(nombreTabla);
    } else
      this.removeColumn(nombreTabla);
  }

  addColumn(nombreTabla: string) {
    if (!this.displayedColumns.includes(nombreTabla)) {  //includes determina si esta o no en el array
      this.displayedColumns.push(nombreTabla); //agrega un elemento nuevo y lo añade al final del array.
    }
  }

  removeColumn(nombreTabla: string) {
    let index = this.displayedColumns.indexOf(nombreTabla);
    if (index > -1) {
      this.displayedColumns.splice(index, 1);
    }
  }

}
