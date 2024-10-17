import { PrefixNot } from '@angular/compiler';
import { Component } from '@angular/core';

export interface CountryPhone{
    name: string;
    flag: string;
    prefix: number[];
}

const COUNTY_PREFIES: CountryPhone[] = [
  {name: 'Spain', flag: 'spain/spain_640.png', prefix: [34]},
  {name: '', flag: 'spain/spain_640.png', prefix: [34]}

]

@Component({
  selector: 'app-phone-prefix-list',
  templateUrl: './phone-prefix-list.component.html',
  styleUrl: './phone-prefix-list.component.css'
})
export class PhonePrefixListComponent {

  countryPhoneList = COUNTY_PREFIES;

  getFlagImage(flag: string) {
      return 'https://img.freeflagicons.com/thumb/round_icon/${flag}'
    }
}
