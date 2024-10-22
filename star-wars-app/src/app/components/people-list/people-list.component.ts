import { Component } from '@angular/core';
import { People } from '../../models/peole-list.interfcaes';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent {
  peopleList: People[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getVehicleList().subscribe((resp) => {
      this.peopleList = resp.results;
    });
  }
}
