import { Component, OnInit } from '@angular/core';
import { House } from '../../interfaces/house.interfaces';
import { HouseService } from '../../services/house.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrl: './house-list.component.css'
})
export class HouseListComponent implements OnInit {

  listado: House[] = [];

  //instanciamos el servicio para poder utilizarlo
  constructor(private houseServices: HouseService){}

  ngOnInit(): void {
    this.houseServices.getHouseList().subscribe(respuesta =>{
      this.listado = respuesta;
    });
  }
}
