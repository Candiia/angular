import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleList } from '../../interfaces/vehicle.interface';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent implements OnInit {

  listado: VehicleList = { count: 0, next: '', previous: 3, results: [] };

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicleList().subscribe(respuesta => {
      this.listado = respuesta;
    });
  }
}
