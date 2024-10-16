import { Component } from '@angular/core';


export interface ListadoAlumnos {
  numberAlumn: number;
  name: string;
  surname: string;
  NIF: string;
  age: number;
  course: string;
}

const ALUMNO_DATA: ListadoAlumnos[] = [
  {numberAlumn: 1, name: 'Luís', surname: 'Martínez', NIF: '47255631J', age: 25, course: '2ºDAM'},
  {numberAlumn: 2, name: 'Ana', surname: 'Ortíz', NIF: '475263481K', age: 23, course: '1ºDAM'},
  {numberAlumn: 3, name: 'Cloe', surname: 'Gúzman', NIF: '52256331S', age: 22, course: '2ºAYF'},
  {numberAlumn: 4, name: 'Francisco', surname: 'Alcantarilla', NIF: '28555631J', age: 20, course: '1ºTeleco'},
  {numberAlumn: 5, name: 'José', surname: 'Fernandez', NIF: '48263620L', age: 25, course: '2ºDAM'},
  {numberAlumn: 6, name: 'Lucía', surname: 'Pérez', NIF: '46256302G', age: 23, course: '2ºTeleco'},
  {numberAlumn: 7, name: 'Olga', surname: 'Marcos', NIF: '47259658B', age: 21, course: '2ºDAM'},
  {numberAlumn: 8, name: 'David', surname: 'Guitierrez', NIF: '47296638Y', age: 26, course: '1ºYFM'},
  {numberAlumn: 9, name: 'Lucas', surname: 'Calado', NIF: '28255403M', age: 29, course: '2ºDAM'},
  {numberAlumn: 10, name: 'Patricia', surname: 'López', NIF: '36525632P', age: 27, course: '2ºAYF'},
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})

export class TableComponent {

  displayedColumns: string[] = ['numberAlumn', 'name', 'surname', 'NIF', 'age', 'course'];
  listadoAlumnos = ALUMNO_DATA;

}
