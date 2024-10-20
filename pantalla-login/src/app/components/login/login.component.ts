import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})
export class LoginComponent {

  email = '';
  contraseya = '';


  login() {
    console.log(this.email);
    console.log(this.contraseya)
  }

  constructor() { }

}
