import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../interfaces/vehicle.interfaces';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) {}

  getVehicleList(): Observable<Vehicle[]>{
    return this.http.get<Vehicle[]>('https://swapi.dev/api/vehicles');
  }


}
