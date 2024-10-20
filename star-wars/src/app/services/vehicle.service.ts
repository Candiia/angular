import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleList } from '../interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getVehicleList(): Observable<VehicleList> {
    return this.http.get<VehicleList>('https://swapi.dev/api/vehicles');
  }


}
